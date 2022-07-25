import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Clothes } from '../../../model/clothes';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public clothes: any
  @Output() roupa : EventEmitter<Clothes> = new EventEmitter()
  constructor() {}

  ngOnInit(): void {

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

buyItem() {
  console.log(this.clothes)

  localStorage.setItem('roupaSelecionada', JSON.stringify(this.clothes))

}

}
