import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Medico } from '../Modelo/Medico'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='https://spring-boot-duseches.herokuapp.com/medicos'

  getMedicos(){
    console.log(this.http.get<Medico[]>(this.Url));
    return this.http.get<Medico[]>(this.Url);
  }
  createMedico(medico:Medico){
    return this.http.post<Medico>(this.Url, medico);
  }
  getMedico(id:number){
    return this.http.get<Medico>(this.Url+"/"+id);
  }
  updateMedico(medico:Medico){
    return this.http.put<Medico>(this.Url, medico);
  }
  deleteMedico(medico:Medico){
    return this.http.delete<Medico>(this.Url+"/"+medico.id);
  }
}
