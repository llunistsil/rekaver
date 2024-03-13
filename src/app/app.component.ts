import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TitleCasePipe} from "@angular/common";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {BrandsComponent} from "./shared/components/brands/brands.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, TitleCasePipe, NavbarComponent, FooterComponent, BrandsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rekaver';
}
