import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: [
    
  ]
})
export class QuoteComponent implements OnInit {
  public show:boolean = false;
  public id:string = '';    
  public pendingQuotes:any [] = [];
  public aprovedQuotes:any [] = [];
  public Ports:any [] = [];
  port_id: any;
  production_type: any;
  type_organization: any =  'Nada';
  services: any;
  tons: any;
  date_operation: any;
  productivity_rate: any;
  spoons: any;
  hoopers: any;
  mini_hoppers: any;
  load: any = false;
  discharge: any = false;
  bagged: any = false;
  
  constructor(private quoteSvc:QuotesService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id') || '';
    this.getPendingQuotes();
    this.getAprovedQuotes();
    this.getPorts();
  }

  getPendingQuotes(){
    this.quoteSvc.getQuotationsByIdAndStatus('getforclientidpending', this.id )
            .subscribe((resp:any) => {
              this.pendingQuotes = resp.data;
            });
  }

  getAprovedQuotes(){
    this.quoteSvc.getQuotationsByIdAndStatus('getforclientidaproved', this.id)
            .subscribe((resp:any) => {
              this.aprovedQuotes = resp.data;
            });
  }

  deleteQuote(id:string){
    
    Swal.fire({
      title: '¿Quieres eliminar esta cotización? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.quoteSvc.deleteQuotation(id) 
            .subscribe((resp:any) => {
              if (resp.error === false ) {
                Swal.fire('Exito', resp.message ,'success');
                this.getPendingQuotes();
                this.getAprovedQuotes();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
      }
     
    })
   
  }
  quote(){
    const body = {
      port_id: this.port_id,
      client_id: this.id,
      product_type:this.production_type,
      type_organization: this.type_organization,
      services: this.services,
      tons: this.tons,
      date_operation: this.date_operation,
      productivity_rate: this.productivity_rate,
      spoons: this.spoons,
      hoppers: this.hoopers,
      mini_hoppers: this.mini_hoppers,
      load: this.load,
      discharge: this.discharge ,
      bagged: this.bagged
  }
    this.quoteSvc.createQuotation(body)
          .subscribe((resp:any) => {
            if (resp.error === false ) {
                Swal.fire('Exito', resp.message, 'success');
                this.getPendingQuotes();
            } else{ 
              Swal.fire('Oooops', resp.message, 'error');
            }
          })
  }

  getPorts(){
    this.quoteSvc.getPorts()
            .subscribe((resp:any)=> {
              this.Ports = resp.data;
            })
  }
}
