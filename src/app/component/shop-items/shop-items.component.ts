import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
  item: Item = {};
  items: Item[] = [];

  constructor() { }


  ngOnInit(): void {

    this.item.title = 'Shoes';
    this.item.price = 20;
    this.item.description = 'Test Desc';

    this.items = [
      { title: 'Shoes', price: 400, description: 'xyz', isDiscount: false },
      { title: 'Shirts', price: 750, description: 'xyz', isDiscount: true },
      { title: 'Shorts', price: 700, description: 'xyz', isDiscount: true },
      { title: 'Mobile', price: 15000, description: 'xyz', isDiscount: true },
      { title: 'T-Shirts', price: 500, description: 'xyz', isDiscount: true },
      { title: 'Perfumes', price: 200, description: 'xyz', isDiscount: true },
      { title: 'TV', price: 42000, description: 'xyz', isDiscount: true },
      { title: 'Jackets', price: 1500, description: 'xyz', isDiscount: true },
      { title: 'Watches', price: 2300, description: 'xyz', isDiscount: true },
      { title: 'Air-Conditioner', price: 45000, description: 'xyz', isDiscount: false },
      
    ];
    }
  }
