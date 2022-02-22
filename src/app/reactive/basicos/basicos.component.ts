import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup ({
  //   'nombre': new FormControl(''),
  //   'precio': new FormControl(0),
  //   'existencias': new FormControl(0)
  // });

  // [.... , validadores syncronos, vaidadores asyncronos]
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  ngOnInit() {
      this.miFormulario.reset({
        nombre:'',
        precio:0,
        existencias:0
      })
  }

  constructor( private fb: FormBuilder){}

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors &&
    this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }
}