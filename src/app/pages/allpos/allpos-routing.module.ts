import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllposComponent } from './allpos.component';

const routes: Routes = [{ path: '', component: AllposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllposRoutingModule { }
