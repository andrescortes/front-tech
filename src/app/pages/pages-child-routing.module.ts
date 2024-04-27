import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryDateComponent } from './delivery-date/delivery-date.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'delivery', component: DeliveryComponent },
  { path: 'delivery-date', component: DeliveryDateComponent },
  { path: 'display', component: DisplayComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesChildRoutingModule { }
