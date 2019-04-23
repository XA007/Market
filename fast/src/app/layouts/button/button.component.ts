import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  @ViewChild('btn') btn: ElementRef<HTMLDivElement>;
  @Input() public buttonName: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.btn.nativeElement.style.display = this.buttonName === 'hide' ? 'none' : 'block';
  }
}
