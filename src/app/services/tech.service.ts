import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  techs: [] = [];
  cargando = true;

  constructor( private http: HttpClient) { 
    this.cargarInfo();
  }

  cargarInfo() {
    this.http.get('assets/data/tech-data.json')
        .subscribe( (resp: any) => {
          this.techs = resp.techs;
        })
    this.cargando = false;
  }
}
