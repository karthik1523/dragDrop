import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from './pdfmake.component';

const routes: Routes = [{ path: '', component: PdfmakeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfmakeRoutingModule { }
