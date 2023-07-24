import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [{path:'', redirectTo:'/login',pathMatch:'full'},
  { path: 'new', loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule)}, 
{ path: 'time-line', loadChildren: () => import('./pages/time-line/time-line.module').then(m => m.TimeLineModule) },
 { path: 'pdfmake', loadChildren: () => import('./pages/pdfmake/pdfmake.module').then(m => m.PdfmakeModule) },
{ path: 'asset-fixing', loadChildren: () => import('./pages/asset-fixing/asset-fixing.module').then(m => m.AssetFixingModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'allpos', loadChildren: () => import('./pages/allpos/allpos.module').then(m => m.AllposModule) },
  { path: 'template1', loadChildren: () => import('./pages/template1/template1.module').then(m => m.Template1Module) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
