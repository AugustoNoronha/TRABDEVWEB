import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
              private _serviceses: AppservicesService
              ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      nome: ['', Validators.required], 
      numero: ['', Validators.required],
      validade:['', Validators.required],
      codigo: ['', Validators.required],
      })
    }

    createCard(){
      if(this.form.valid){
        const nome = this.form.get("nome")?.value
        const numero = this.form.get("numero")?.value
        const validade = this.form.get("validade")?.value
        const codigo  = this.form.get("codigo")?.value
       
        this._serviceses.createCards(nome, numero, validade, codigo).subscribe({
          next: data => {
            this.postId = data.id
          }
        })
      }else{
        console.log("Formulario invalido")
      }
      
    }

}
