import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../Models/Product';
import {DATA} from '../../../data/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product | null;

  constructor(private router: ActivatedRoute, private data: DATA) { }

  ngOnInit() {
    this.product = this.data.getProductByName(this.router.snapshot.params.name);
  }

}
