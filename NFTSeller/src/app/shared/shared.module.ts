import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    IconComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
