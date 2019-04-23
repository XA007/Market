import { Component, OnInit } from '@angular/core';
import {Link} from '../../Models/Link';

const links: Link[] = [
  {name: 'About', link: '/about'},
  {name: 'Manifesto', link: '/manifesto'},
  {name: 'Contact us', link: '/contactUs'}
];

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.css']
})
export class BottomNavBarComponent implements OnInit {

  public links: Link[];
  public readonly COPYRIGHT: string = '© Copyright 2019 Merikat';

  ngOnInit() {
    this.links = links;
  }
}
