import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id, oid}) =>{
        this.ID = id;
        this.Oid = oid;
        });
    }
    Show(){
      this.show =! this.show;
    }
}
