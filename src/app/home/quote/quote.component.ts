import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: [
    
  ]
})
export class QuoteComponent implements OnInit {
  public show:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  quote(){
    Swal.fire(
      'Cotización enviada',
      'Responderemos tu solicitud en el menor tiempo posible!',
      'success',      
    )
  }
}
