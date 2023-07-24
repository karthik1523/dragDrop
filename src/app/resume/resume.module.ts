import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SafePipe } from 'src/safe.pipe';
import { NgxDocViewerModule } from 'ngx-doc-viewer';


@NgModule({
  declarations: [
    ResumeComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    NgxDocViewerModule
     
  ]
})
export class ResumeModule { }
