import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0),)}

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(1), Validators.required]],
    existencias: [, [Validators.min(1), Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 480 ti',
      precio: 1800,
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      return this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
