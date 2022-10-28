import { Injectable } from '@angular/core';

interface LocalStorageData {
  name?: string;
  participants?: string[];
}

export interface WinnerResponse {
  state: 'sorteado' | 'vazio';
  nome: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class WinnerService {
  constructor() {}

  getWinner(): WinnerResponse {
    let winner: WinnerResponse = {
      nome: this.checkWinner(),
      state: 'sorteado',
    };
    if (!winner) {
      winner = { nome: this.sortWinner(), state: 'sorteado' };
    }
    if (!winner.nome) {
      return { nome: undefined, state: 'vazio' };
    }
    this.saveWinner(winner.nome);
    return winner;
  }

  addParticipant(name: string): void {
    this.writeLocalStorageContent(name, undefined);
  }

  private saveWinner(winner: string) {
    this.writeLocalStorageContent(undefined, winner);
  }

  private writeLocalStorageContent(participant: string, winner: string) {
    let patchData = this.getLocalStorageContent() || {};
    patchData.name = patchData && patchData.name ? patchData.name : winner;
    patchData && patchData.participants
      ? patchData.participants.push(participant)
      : [];
    window.localStorage.setItem('localStorageData', JSON.stringify(patchData));
  }

  private checkWinner(): string {
    return this.getLocalStorageContent()?.name!;
  }

  private getLocalStorageContent() {
    const localStorageContent: string =
      window.localStorage.getItem('localStorageData');
    return localStorageContent
      ? (JSON.parse(localStorageContent) as LocalStorageData)
      : undefined;
  }

  private sortWinner(): string {
    const array: string[] = this.getLocalStorageContent()?.participants
      ? this.getLocalStorageContent()?.participants
      : [''];
    return array[Math.floor(Math.random() * array.length)];
  }
}
