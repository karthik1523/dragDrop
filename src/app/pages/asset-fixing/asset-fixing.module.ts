import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetFixingRoutingModule } from './asset-fixing-routing.module';
import { AssetFixingComponent } from './asset-fixing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssetFixingComponent
  ],
  imports: [
    CommonModule,
    AssetFixingRoutingModule,
    FormsModule 
  ]
})
export class AssetFixingModule { }
