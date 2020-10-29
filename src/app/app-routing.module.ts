import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Quiz1Component} from './quiz1/quiz1.component';
import{HostComponent}from './host/host.component'

const routes: Routes = [{ path: 'quiz1', component:Quiz1Component },
{ path: 'quiz2', component:Quiz1Component },
{ path: 'quiz3', component:Quiz1Component },
{ path: 'quiz4', component:Quiz1Component },
{ path: 'quiz5', component:Quiz1Component },
{path:'host',component:HostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
