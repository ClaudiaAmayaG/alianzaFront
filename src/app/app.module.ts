import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerManagerComponent} from './customer-manager/customer-manager.component';
import {MenuComponent} from './customer-manager/components/menu/menu.component';
import {InfoCustomerComponent} from './customer-manager/components/info-customer/info-customer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerManagerService} from '../service/customer-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    MenuComponent,
    InfoCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
