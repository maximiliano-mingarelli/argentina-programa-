import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'http://localhost:8080/persona';

  constructor(private http: HttpClient) { }

  public getPersonaList(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL+'/perfil');
  }
  public getPersonaById(id:number):Observable<persona>{
    return this.http.get<persona>(`${this.URL}/${id}`); // opcion 2 this.URL + "/"+id
  }
}

