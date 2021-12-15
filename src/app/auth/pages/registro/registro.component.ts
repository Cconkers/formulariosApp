import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator,
  Validator,
} from '@angular/forms';

import { EmailvalidatorService } from 'src/app/shared/validator/emailvalidator.service';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: [],
})
export class RegistroComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ValidatorService: ValidatorService,
    private emailValidator: EmailvalidatorService
  ) {}
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    
    if (errors?.['required']) {
      return 'Es obligatorio introducir un email';
    } else if (errors?.['emailTomado']) {
      return 'El email ya se encuentra registrado';
    } else if (errors?.['pattern']) {
      return 'El email debe ser en un formato válido';
    }
    return '';
  }

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ValidatorService.nombreApellidoValidacion),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ValidatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.ValidatorService.random]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.ValidatorService.passwordMatch('password', 'password2'),
      ],
    }
  );

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jhon Doe',
      email: 'test1@test.com',
      username: 'Does Jhones',
      password: '123456',
      password2: '123456',
    });
  }
  countingLetters(inputCount: string) {
    return inputCount.length;
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  guardar() {
    console.log(this.miFormulario);
    this.miFormulario.markAllAsTouched();
  }
}
