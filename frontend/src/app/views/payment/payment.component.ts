import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppservicesService } from 'src/app/services/appservices.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cards: any;

  constructor(private router:Router,
              private _services:AppservicesService
    ) { }

  ngOnInit(): void {
   this.getCards()
  }

  getCards(){
    this._services.getCards().subscribe(res => {
      this.cards = res
      console.log(this.cards)
    })
  }

  navProdCreate(){
    this.router.navigate(["payments/create"])
  }

  deleteCard(id:Number){
    var status = ""
    this._services.deleteCard(id).subscribe({

      next: data =>{
        status = 'Deletado com sucesso'
        this.getCards()
      }
    }
    )
  }

}
