import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../Models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: Product;

  ngOnInit(): void {
  }

}
