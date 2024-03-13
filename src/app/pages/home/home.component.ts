import { Component } from '@angular/core';
import {BrandsComponent} from "../../shared/components/brands/brands.component";
import {ColorsComponent} from "../../shared/components/colors/colors.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BrandsComponent,
    ColorsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
