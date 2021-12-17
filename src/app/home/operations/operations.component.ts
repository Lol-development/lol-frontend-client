import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styles: [
  ]
})
export class OperationsComponent implements OnInit {
  public ID: string = '';
  public operations:any [] = [];

  constructor(private operationsSvc: OperationsService,) { }

  ngOnInit(): void {
    this.ID = localStorage.getItem('id') || '';
    this.getOperationsClient();
  }
  getOperationsClient(){
    this.operationsSvc.getClientOperations(this.ID)
            .subscribe((resp:any) => {
              this.operations = resp.data
            })
  }
}
