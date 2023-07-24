import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template1RoutingModule } from './template1-routing.module';
import { Template1Component } from './template1.component';



@NgModule({
  declarations: [
    Template1Component
  ],
  imports: [
    CommonModule,
    Template1RoutingModule
  ]
})
export class Template1Module { }
