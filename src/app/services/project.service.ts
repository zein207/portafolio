import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [];
  cargando = true;

  constructor(public http: HttpClient) { 
    this.cargarProyectos();
  }

  cargarProyectos() {

    return new Promise<void>( (resolve, reject) => {
      this.http.get('https://angular-portafolio-850e3-default-rtdb.firebaseio.com/proyectos.json')
        .subscribe( (resp: Project[]) => {
          this.projects = resp;
          this.cargando = false;
          resolve();
        });
    })
    
  }

  getProyecto( id: string ) {
    return this.http.get(`https://angular-portafolio-850e3-default-rtdb.firebaseio.com/proyectos/${id}.json`)
  }

  
}
