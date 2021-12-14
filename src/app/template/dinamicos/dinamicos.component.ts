import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  initFormDinamicos= {
    nombre: '', 
    favoritoInput: []
  };

  agregar() {
    this.initFormDinamicos.favoritoInput.push();
    return console.log(this.initFormDinamicos.favoritoInput);
  }

  nombreValido() {
    console.log(this.initFormDinamicos.nombre.length);
  }

  guardar() {
    console.log(this.nombreValido());
  }
}
