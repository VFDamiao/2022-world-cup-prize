import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from '@angular/forms';
import { WinnerService } from 'src/app/services/winner.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  showForm = true;
  flagMostrarBotao = false;
  profileForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.max(50), Validators.min(3)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.max(50), Validators.min(3)],
    ],
    birthDate: [''],
    genre: [''],
    cpf: [''],
    passport: [''],
    passportStatus: [''],
    passportNumber: [''],
    passportDate: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    email: [''],
  });

  constructor(private fb: FormBuilder, private winnerService: WinnerService) {}

  async ngOnInit(): Promise<void> {
    this.showForm = (await this.winnerService.getStatus()) != 'sorteado';
  }

  onSubmit() {
    this.winnerService.addParticipant(
      this.profileForm.value['firstName'] +
        ' ' +
        this.profileForm.value['lastName']
    );
    console.log(this.profileForm.value);
  }

  ativarContagemRegressivaBotao() {
    setTimeout(() => { this.flagMostrarBotao = true; } , 3000);
    setTimeout(() => { this.flagMostrarBotao = false; } , 10000);
  }

  resetarBackend() {
    this.winnerService.resetBackend();
    this.flagMostrarBotao = false;
  }

  changePassportStatus(e: any) {
    this.passportStatus?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get passportStatus() {
    return this.profileForm.get('passportStatus');
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }
}
