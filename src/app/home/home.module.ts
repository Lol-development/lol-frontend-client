import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OperationsComponent } from './operations/operations.component';
import { QuoteComponent } from './quote/quote.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OperationsDetailsComponent } from './operations-details/operations-details.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    OperationsComponent,
    QuoteComponent,
    OperationsDetailsComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChartsModule,
    FormsModule
  ]
})
export class HomeModule { }
