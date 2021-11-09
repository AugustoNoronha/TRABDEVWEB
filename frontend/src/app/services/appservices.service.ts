import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<any>(`${environment.baseURL}cartoes`)

  }

  createCards(nome:String , numero:String, validade:String, codigo:String){
    return this.http.post<any>(`${environment.baseURL}cartoes`,{nome: nome, numero:numero, validade:validade, codigo:codigo})
  }

  deleteCard(id:Number){
    return this.http.delete<any>(`${environment.baseURL}cartoes/${id}`)
  
  }
}
