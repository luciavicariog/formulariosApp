import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
