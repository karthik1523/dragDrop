import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template1Component } from './template1.component';

const routes: Routes = [{ path: '', component: Template1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template1RoutingModule { }
