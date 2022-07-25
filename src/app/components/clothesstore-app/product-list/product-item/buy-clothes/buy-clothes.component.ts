
import { LocalizedString } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Clothes } from '../../../../model/clothes';

@Component({
  selector: 'app-buy-clothes',
  templateUrl: './buy-clothes.component.html',
  styleUrls: ['./buy-clothes.component.css']
})
export class BuyClothesComponent implements OnInit {
  valor: ''
  roupas: Clothes[] = []
  constructor() { 
    
  }
  //o erro ta na hora de passar pois no console.log ta dando erro
  ngOnInit(): void {
  
    
    this.roupas.push(JSON.parse(localStorage.getItem('roupaSelecionada')))
    console.log(this.roupas)
  }

  buyRoupa() {
    this.roupas
  }


  productList = [
    {
    id!: 0,
    name!: "",
    price!: 0,
    quantity!: 0,
    category!: "",
    img!: ""
  }
]

sizeClicked(value) {
  this.valor = value
  console.log(this.valor)
}

}
