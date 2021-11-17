import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<any>(`${environment.baseURL}produtosEpa`)

  }

  createCards(nome:String , preco:String, img:String){
    return this.http.post<any>(`${environment.baseURL}produtosEpa`,{nome: nome, preco:preco, img:img})
  }

  deleteCard(id:Number){
    return this.http.delete<any>(`${environment.baseURL}produtosEpa/${id}`)
  
  }
}
