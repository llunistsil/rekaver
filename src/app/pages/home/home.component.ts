import { Component } from '@angular/core';
import {BrandsComponent} from "../../shared/components/brands/brands.component";
import {ColorsComponent} from "../../shared/components/colors/colors.component";
import {CategoriesComponent} from "../../shared/components/categories/categories.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BrandsComponent,
    ColorsComponent,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
