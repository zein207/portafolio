import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../interfaces/info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: Info = {};

  constructor(public http: HttpClient) { 
    this.cargarInfo();
  }
  
  private cargarInfo() {

    return new Promise<void>( (resolve, reject) => {
      this.http.get('assets/data/info-data.json')
        .subscribe( (resp: Info) => {
          this.info = resp;
          resolve();
        });
    }
  )
  }

  
  
}
