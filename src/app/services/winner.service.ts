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
    if (!winner.nome) {
      winner = { nome: this.sortWinner(), state: 'sorteado' };
    }
    if (!winner.nome) {
      return { nome: undefined, state: 'vazio' };
    }
    this.saveWinner(winner.nome);
    return winner;
  }

  addParticipant(name: string): void {
    let patchData = this.getLocalStorageContent() || {};
    if (patchData && patchData.participants) {
      patchData.participants.push(name);
    } else {
      patchData.participants = [name];
    }
    console.log('addParticipant', patchData);
    window.localStorage.setItem('localStorageData', JSON.stringify(patchData));
  }

  private saveWinner(winner: string) {
    let patchData = this.getLocalStorageContent() || {};
    patchData.name = patchData && patchData.name ? patchData.name : winner;
    console.log(patchData);
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
