import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  guardar() {
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  initForm = {
    producto: 'Algo',
    precio: 10,
    existencias: 10,
  };

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    this.miFormulario?.controls['precio']?.setErrors({ precio: true });
    return (
      console.log(this.miFormulario),
      this.miFormulario?.controls['precio']?.touched &&
        this.miFormulario?.controls['precio']?.value < 0
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
