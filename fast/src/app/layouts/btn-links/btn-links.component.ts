import {Component, Input} from '@angular/core';
import {Link} from '../../Models/Link';

@Component({
  selector: 'app-btn-links',
  templateUrl: './btn-links.component.html',
  styleUrls: ['./btn-links.component.css']
})
export class BtnLinksComponent {

  @Input() app: Link;

}
