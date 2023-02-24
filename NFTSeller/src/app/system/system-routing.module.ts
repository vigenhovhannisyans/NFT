import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SystemComponent } from './components/system/system.component';

const routes: Routes = [
  { path: '', redirectTo: 'system', pathMatch:'full' },
  { path: 'system', component: SystemComponent, children: [
    {path: 'home', component: HomeComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
