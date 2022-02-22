import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorito {
  id: number,
  nombre:string
}

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  persona: Persona = {
    nombre:'Lucía',
    favoritos: [
      {id:1, nombre:'parchís'},
      {id:2, nombre:'damas'}
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('formulario posteado');

  }

  nombreValido(){
    return this.miFormulario?.controls.nombre?.invalid &&
    this.miFormulario?.controls.nombre?.touched;
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){

    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push(nuevoFavorito);

    this.nuevoJuego='';
  }

}
