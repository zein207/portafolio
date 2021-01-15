import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public dark = 'dark-theme.css';
  public light = 'light-theme.css';
  private linkTheme = document.querySelector('#theme');
  public icon = 'fas fa-sun';
  public sino = 'Activado'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    if(this.linkTheme.getAttribute('href') === `assets/css/${this.dark}`) {
      this.linkTheme.setAttribute('href', `assets/css/${this.light}`);
      this.icon = 'fas fa-moon';
      this.sino = 'Desactivado';
    } else {
      this.linkTheme.setAttribute('href', `assets/css/${this.dark}`);
      this.icon = 'fas fa-sun';
      this.sino = 'Activado';
    }
  }

}

/*
const url = `./assets/css/colors/${ theme }.css`
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    assets/css/*/ 
