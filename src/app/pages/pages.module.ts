import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryDateComponent } from './delivery-date/delivery-date.component';
import { DisplayComponent } from './display/display.component';
import { MainPageComponent } from './main-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryDateComponent,
    DisplayComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
