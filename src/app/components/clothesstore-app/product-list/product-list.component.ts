import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Clothes } from '../../model/clothes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  clothes: any 


  constructor() { }

  ngOnInit(): void {
    this.clothes = this.productList
    console.log(this.clothes)
  }


  public productList = [
    {
    id!: 0,
    name!: "Moletom térmico Cogumelo",
    price!: 80.90,
    quantity!: 10,
    category!: "moletom de inverno",
    img!: "image"
  },
  {
    id!: 1,
    name!: "Suéter branco New York Brooklyn",
    price!: 64.99,
    quantity!: 20,
    category!: "Moletom de inverno",
    img!: "image1"
  },
  {
    id!: 2,
    name!: "Suéter preto Los Angeles California",
    price!: 57.95,
    quantity!: 5,
    category!: "Suéter de inverno",
    img!: "image3"
  },
  {
    id!: 3,
    name!: "Desenho Animado ocasional Suéter",
    price!: 66.0,
    quantity!: 1,
    category!: "Suéter de inverno",
    img!: "image4"
  }
]
  
}
