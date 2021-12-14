import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'R234',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeathStranding' },
    ],
  };
  nuevoJuego: string = '';

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
if (this.nuevoJuego != '' && this.nuevoJuego.length >= 3) {
  this.persona.favoritos.push({...nuevoFavorito});
  this.nuevoJuego ="";
}
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
  nombreValido() {}

  guardar() {}
}
