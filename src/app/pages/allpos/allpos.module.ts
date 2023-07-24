import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllposRoutingModule } from './allpos-routing.module';
import { AllposComponent } from './allpos.component';


@NgModule({
  declarations: [
    AllposComponent
  ],
  imports: [
    CommonModule,
    AllposRoutingModule
  ]
})
export class AllposModule { }
