import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Link} from '../../Models/Link';

const links: Link[] = [
  {name: 'Anwar Boujja', link: ''},
  {name: 'Settings', link: ''},
  {name: 'Log Out', link: ''},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('user') actionMenu: ElementRef<HTMLDivElement>;
  @Input() imgUrl: string;
  public links: Link[];
  private showMenu: boolean;

  constructor() { }

  ngOnInit() {
    this.showMenu = false;
    this.links = links;
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
