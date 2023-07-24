import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfmakeRoutingModule } from './pdfmake-routing.module';
import { PdfmakeComponent } from './pdfmake.component';


@NgModule({
  declarations: [
    PdfmakeComponent
  ],
  imports: [
    CommonModule,
    PdfmakeRoutingModule
  ]
})
export class PdfmakeModule { }
