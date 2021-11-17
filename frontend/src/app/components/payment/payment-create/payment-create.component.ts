import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AppservicesService } from 'src/app/services/appservices.service';


@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  form!: FormGroup;
  postId = null;

  constructor(private fb: FormBuilder,
              private _serviceses: AppservicesService,
              private route: Router,
              ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      nome: ['', Validators.required], 
      preco: ['', Validators.required],
      img:['', Validators.required],
      })
    }

    createCard(){
      if(this.form.valid){
        const nome = this.form.get("nome")?.value
        const preco = this.form.get("preco")?.value
        const img = this.form.get("img")?.value
       
       
        this._serviceses.createCards(nome, preco, img).subscribe({
          next: data => {
            this.postId = data.id
            if(data != null){
              this.route.navigate(['/home'])
            }
          }
        })
      }else{
        console.log("Formulario invalido")
      }
      
    }

}
