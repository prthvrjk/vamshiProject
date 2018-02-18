import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CustomerDetailsComponent} from './customerDetails/customer.component'
import { Routes,RouterModule} from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { STBDataComponent } from './stbData/stbdata.component';
import {DailyReport} from './dailyReport/dailyreport.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const routes: Routes  = [
  {path: 'customerDetails',  component: CustomerDetailsComponent},
  {path: 'stbData',  component: STBDataComponent},
  {path: 'dailyReport', component: DailyReport}
];

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    CustomerDetailsComponent,
    STBDataComponent,
    DailyReport
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
