import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styles: [
  ]
})
export class TopbarComponent implements OnInit {
  public username : string = '';
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('fullname') ||'Nombre del cliente';
  }

}
