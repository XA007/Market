import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../../Models/Product';
import {DATA} from '../../../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  public products: Product[];
  public showLoader: boolean;

  constructor(private data: DATA) {}

  ngOnInit() {
    this.showLoader = true;
    this.products = this.data.PRODUCTS;
  }

  ngAfterViewInit(): void {
    setTimeout( () => {
    this.showLoader = false;
    }, 2000);
  }
}
