import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NgIconComponent} from "@ng-icons/core";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  imports: [
    NgOptimizedImage,
    NgIconComponent
  ],
  standalone: true
})

export class NavbarComponent{
  constructor() {
  }

}
