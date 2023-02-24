import { Component, OnInit } from '@angular/core';
import { Routers } from './routes/route';

@Component({
  selector: 'nft-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public readonly routers = Routers;
  constructor() { }

  ngOnInit(): void {
  }

}
