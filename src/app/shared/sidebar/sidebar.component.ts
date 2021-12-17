import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public username : string = '';
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('fullname') ||'';
  }


}
