import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent   },
  // { path: '**', component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
