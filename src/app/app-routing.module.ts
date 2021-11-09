import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routes';
import { HomeRoutingModule } from './home/home.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
