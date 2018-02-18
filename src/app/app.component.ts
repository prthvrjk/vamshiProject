import { Component } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import {CustomerDetailsComponent} from './customerDetails/customer.component';
import {TilesComponent} from './tiles/tiles.component';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prithvi';
}
