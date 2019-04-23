import { Component, OnInit } from '@angular/core';
import {ButtonNames} from '../../Models/ButtonNames';

const CART_BTN_INDEX   = 0;
const ADD_BTN_INDEX    = 1;
const CLOSE_BTN_INDEX  = 2;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public showAddForm: boolean;
  public showCart: boolean;
  public buttonNames: string[];

  constructor() { }

  ngOnInit() {
    this.showCart = false;
    this.showAddForm = false;
    this.buttonNames = [ButtonNames.cart, ButtonNames.addProduct, ButtonNames.hide];
  }

  public cart(): void {
    this.showCart = !this.showCart;
    this.buttonNames[CART_BTN_INDEX] = this.showCart ? ButtonNames.hide : ButtonNames.cart;
    this.buttonNames[CLOSE_BTN_INDEX] = ButtonNames.close;
  }

  public add(): void {
    this.showAddForm = !this.showAddForm;
    this.buttonNames[ADD_BTN_INDEX] = this.showAddForm ? ButtonNames.hide : ButtonNames.addProduct;
    this.buttonNames[CLOSE_BTN_INDEX] = ButtonNames.close;
  }

  public close(): void {
    if (this.showCart) { this.showCart = !this.showCart; this.buttonNames[CART_BTN_INDEX] = ButtonNames.cart; }
    if (this.showAddForm) { this.showAddForm = !this.showAddForm; this.buttonNames[ADD_BTN_INDEX] = ButtonNames.addProduct; }
    if (!this.showCart && !this.showAddForm) { this.buttonNames[CLOSE_BTN_INDEX] = ButtonNames.hide; }
  }

}
