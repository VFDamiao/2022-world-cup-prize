import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
