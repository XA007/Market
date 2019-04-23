import { Component } from '@angular/core';
import {Link} from '../../Models/Link';

const APPS: Array<Link> = [
  {name: 'Home', link: 'www.facebook.com'},
  {name: 'Stock', link: 'stock'},
  {name: 'Setting', link: 'setting'},
  {name: 'Products', link: '/products'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
  {name: 'Setting', link: 'setting'},
  {name: 'Products', link: 'test'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
  {name: 'Products', link: 'test'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
  {name: 'Setting', link: 'setting'},
  {name: 'Products', link: 'test'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
  {name: 'Products', link: 'test'},
  {name: 'Sales', link: 'sales'},
  {name: 'Charts', link: 'chart'},
];

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {

  private apps: Array<Link>;

  constructor() {
    this.apps = new Array<Link>();
    APPS.forEach( (app) => this.apps.push(app));
  }

}
