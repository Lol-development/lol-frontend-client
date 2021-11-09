import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { OperationsComponent } from './operations/operations.component';
import { QuoteComponent } from './quote/quote.component';
import { OperationsDetailsComponent } from './operations-details/operations-details.component';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
    { path: 'Dashboard',
        component: HomeComponent,
        data:{title: 'Cliente'},
        children:[
            {path:'', component: OperationsComponent, data:{title: 'Operaciones'}},
            {path:'Quote', component: QuoteComponent, data:{title:'Cotizar'}},
            {path:'Reports', component: ReportsComponent, data:{title:'Reportes'}},
            {path:'Operations/:id/OperationsDetail/:oid', component:OperationsDetailsComponent,  data:{title: 'Detalle de la operación - Cliente'}},

        ] },
  

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
