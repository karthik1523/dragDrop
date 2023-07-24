import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    DragDropModule
  ]
})
export class NewModule { }
