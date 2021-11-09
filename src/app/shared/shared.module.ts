import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
