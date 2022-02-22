import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

    miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
      username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    },
    {
      validators: [this.validatorService.camposIguales('password','password2')]
    }
  )

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required){
      return 'Email es obligatorio'
    } else if (errors?.pattern){
      return 'El valor no tiene formato de correo';
    } else if (errors?.emailEnUso){
      return 'El correo está en uso';
    }

    return '';
  }

  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Lucia Vicario',
      email: 'test@test.com',
      username: 'luvica',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido (campo:string) {
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }

}
