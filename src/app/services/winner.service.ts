import { Injectable } from '@angular/core';
import axios from 'axios'

const baseUrl = 'https://world-cup-backend-2022.herokuapp.com/api/Participants';

interface ApiResponse {
  participants: string[],
  name: string,
  status: StatusType,
}

export type StatusType = 'sorteado' | 'vazio';

export interface WinnerResponse {
  state: StatusType;
  nome: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class WinnerService {
  constructor() {}

  async getWinner(): Promise<WinnerResponse> {
    const response = await this.getAPI();
    let winner: WinnerResponse = {
      nome: response.name,
      state: 'sorteado',
    };
    if (!winner.nome || winner.nome.length <= 0) {
      winner = { nome: await this.sortWinner(), state: 'sorteado' };
    }
    if (!winner.nome || winner.nome.length <= 0) {
      return { nome: undefined, state: 'vazio' };
    }
    this.saveWinner(winner.nome);
    return winner;
  }

  async getStatus() {
    const response = await this.getAPI();
    return response.name ? 'sorteado' : 'vazio';
  }

  async addParticipant(name: string) {
    await axios.put(baseUrl, { participant: name });
  }

  async resetBackend() {
    await axios.delete(baseUrl+'/reset')
  }

  private async saveWinner(winner: string) {
    await axios.put(baseUrl+ '/winner',{ winner });
  }

  private async getAPI(): Promise<ApiResponse> {
    const response = await axios.get(baseUrl);
    if (response.status == 200) {
      console.log(response.data.data[0])
      return response.data.data[0];
    }
    console.log("erro",response);
    throw new Error("erro: " + response);
  }

  private async sortWinner(): Promise<string> {
    const array: string[] = (await this.getAPI())?.participants 
    return array[Math.floor(Math.random() * array.length)];
  }
}
