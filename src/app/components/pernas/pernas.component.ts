import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pernas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pernas.component.html',
  styleUrl: './pernas.component.scss'
})
export class PernasComponent {

  meuForm: FormGroup;

  constructor() {
    this.meuForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''), 
      mensagem: new FormControl(''), 
    });
  }


  onSubmit() {
    console.log(this.meuForm.value);
  }
}