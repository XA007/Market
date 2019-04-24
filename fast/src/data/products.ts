import {Product} from '../app/Models/Product';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DATA {

  public readonly URL: string[] = [
    'https://amp.businessinsider.com/images/5be1fb02e4218a3a6c0d56ae-1920-1280.jpg',
    'https://thesweetsetup.com/wp-content/uploads/2018/11/Fantastical-Apple-Watch-Hero-4.jpg',
    'https://wallpapercave.com/wp/wp1916028.png',
    'http://www.hambletonales.co.uk/wp-content/uploads/2018/11/tshirt-male-vintage-burgandy.png',
    'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2018/11/ipad-pro-11-8.jpg',
    'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/1/7/6924295/6924295_7d95ae1a-e083-4cec-a5cc-a13b8c86f59a.jpg',
    'http://www.himherandafork.com/wp-content/uploads/2016/09/espresso.jpg',
  ];
  public readonly PRODUCTS: Product[] = [
    {
      name: 'iPhone Xs',
      seller: 'Apple',
      price: '10 000',
      currency: 'MAD',
      imageUrl: this.URL[0],
    },
    {
      name: 'Apple Watch',
      seller: 'Apple',
      price: '7 599',
      currency: 'MAD',
      imageUrl: this.URL[1],
    },
    {
      name: 'Free Run',
      seller: 'Nike',
      price: '299.99',
      currency: 'MAD',
      imageUrl: this.URL[2],
    },
    {
      name: 'Shirt',
      seller: 'Hambleton',
      price: '129',
      currency: 'MAD',
      imageUrl: this.URL[3],
    },
    {
      name: 'iPad Pro 11',
      seller: 'Apple',
      price: '75 000',
      currency: 'MAD',
      imageUrl: this.URL[4],
    },
    {
      name: 'Helix HX3 20W-50',
      seller: 'Shell',
      price: '149',
      currency: 'MAD',
      imageUrl: this.URL[5],
    },
    {
      name: 'Espresso',
      seller: 'StarBucks',
      price: '20',
      currency: 'MAD',
      imageUrl: this.URL[6],
    },
    {
      name: 'Free Run',
      seller: 'Nike',
      price: '299.99',
      currency: 'MAD',
      imageUrl: this.URL[2],
    },
    {
      name: 'Shirt',
      seller: 'Hambleton',
      price: '129',
      currency: 'MAD',
      imageUrl: this.URL[3],
    },
    {
      name: 'iPad Pro 11',
      seller: 'Apple',
      price: '75 000',
      currency: 'MAD',
      imageUrl: this.URL[4],
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
