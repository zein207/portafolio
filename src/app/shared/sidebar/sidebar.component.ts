import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public btn = document.querySelector('#sidebar');

  constructor() { }

  ngOnInit(): void {
  }

  btnSidebar() {
    this.btn.classList.toggle('active');
  }

}
