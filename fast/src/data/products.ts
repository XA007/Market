import {Product} from '../app/Models/Product';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DATA {

  public readonly URL: string[] = [
    'https://www.maxcars.ch/data/web/maxcars.ch/uploads//logo/_thumb/500x500/essence_shell_logo.png',
    'https://www.tennantco.com/services/product/image.tennant-ca.371972.image',
  ];
  public readonly PRODUCTS: Product[] = [
    {
      name: 'Shell',
      seller: 'Shell',
      price: '999',
      currency: 'MAD',
      imageUrl: this.URL[0],
    },
    {
      name: 'Oil Filter',
      seller: 'Toyota',
      price: '999',
      currency: 'MAD',
      imageUrl: this.URL[1],
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
    {
      name: 'Helix 20D',
      seller: 'Shell',
      price: '150',
      currency: 'MAD',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513YjGNitiL._SY355_.jpg',
    },
  ];

  public getProductByName(name: string): Product | null {
    let p: Product = null;
    this.PRODUCTS.forEach((product) => {
      if (product.name === name) { p = product; }
    });
    return p;
  }
}
