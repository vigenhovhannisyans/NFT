import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nft-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  public name!: string;

  @Input()
  public width!: number;

  @Input()
  public height!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
