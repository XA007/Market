import {Component, OnInit} from '@angular/core';
import {Product} from '../../Models/Product';
import {DATA} from '../../../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private data: DATA) {}
  ngOnInit() {
    this.products = this.data.PRODUCTS;
  }
}
