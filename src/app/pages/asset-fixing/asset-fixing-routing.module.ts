import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetFixingComponent } from './asset-fixing.component';

const routes: Routes = [{ path: '', component: AssetFixingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetFixingRoutingModule { }
