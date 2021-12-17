import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getSubtotal } from 'src/app/models/global.models';
import { OperationsService } from 'src/app/services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operations-details',
  templateUrl: './operations-details.component.html',
  styles: [
  ]
})
export class OperationsDetailsComponent implements OnInit {
  public ID!: string;
  public Oid!: string;
  public show: boolean = false;
  public carries: any[] = [];
  public discarries: any[] = [];
  public factualStatus: any[] = [];
  public removables: any[] = [];
  public dispatches: any[] = [];
  public evidences: any[] = [];
  public rccs: any[] = [];
  public facturation_reports: any[] = [];

  public total:number = 0;
  public subtotal:number = 0;
  public subtotal_turn:number = 0;
  public total_turns:number = 0;
  public getSubtotal = getSubtotal;
  constructor(private activatedRoute: ActivatedRoute,  public operationSvc: OperationsService) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id, oid}) =>{
        this.ID = id;
        this.Oid = oid;
        });
        this.getOperationCarrie();
        this.getOperationDiscargue();
        this.getFactualState();
        this.getOperationDispatches();
        this.getOperationTurns();
        this.getOperationEvidences();
    }
    Show(){
      this.show =! this.show;
    }
    getOperationCarrie(){
      this.operationSvc.getOperationCarries(this.Oid)
                .subscribe((resp:any) => {
                  this.carries = resp.data;
                })
    }
    getOperationDiscargue(){
      this.operationSvc.getOperationsDischarges(this.Oid)
                    .subscribe((resp:any) => {
                      this.discarries = resp.data;
                    })
  }
  getFactualState(){
    this.operationSvc.getOperationFactualState(this.Oid)
            .subscribe((resp:any) => {
              this.factualStatus = resp.data;
            })
  }
  getOperationDispatches(){
    this.operationSvc.getOperationDispatches(this.Oid)
              .subscribe((resp:any) => {
                this.dispatches = resp.data;
              })

  }
  getOperationEvidences(){
    this.operationSvc.getEvidences(this.Oid)
              .subscribe((resp:any) => {
                this.evidences = resp.data;
                console.log(this.evidences)
              })
  }
  getOperationTurns(){
    this.operationSvc.getOperationRcc(this.Oid)
              .subscribe((resp:any) => {
                this.rccs = resp.data;
              })
  }
  updateTurn(id:string){
    const body = {
      confirmation:true
    };
    Swal.fire({
      title: 'Estas seguro que quieres aprobar este turno?',
      text:'No podras declinarlo nuevo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, aprobar!'
    }).then((result) => {
      if (result.value) {
        this.operationSvc.updateTurnAdmin(body, id)
        .subscribe((resp:any) => {
          console.log(resp);
          if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success');
              this.getOperationTurns();
          } else {
              Swal.fire('Oooops', resp.message, 'error');
              
          }
        })
      }
    })
   


  }
  getFacturation(){
    this.operationSvc.facturactionOperation(this.Oid)
              .subscribe((resp:any) => {
                this.facturation_reports = resp.turns;
                resp.turns.forEach((res:any) => {
                  this.subtotal =   getSubtotal(res.cnt, res.turn.value )
                  this.total += this.subtotal;
                  this.subtotal_turn += Number(res.turn.value)
                  this.total_turns += res.cnt;                
                });
              })
  }
}
