import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  detail(id: any) {
    throw new Error('Method not implemented.');
  }
  expURL = environment.apiUrl +'/explab/'
  constructor(private httpClient: HttpClient) {}
    public lista():Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista')
        }
        public details(id:number): Observable<Experiencia>{
          return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
        }
        public save(experiencia : Experiencia): Observable<any>{
          return this.httpClient.post<any>(this.expURL + 'create',experiencia);
        }
        public update(id:number, experiencia:Experiencia):Observable<any>{
          return this.httpClient.put<any>(this.expURL + `update/${id}`,experiencia);
        }
        public delete(id:number):Observable<any>{
          return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
        }
     }

