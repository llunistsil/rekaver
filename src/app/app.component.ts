import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TitleCasePipe} from "@angular/common";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rekaver';
}
