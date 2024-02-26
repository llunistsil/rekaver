import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NgIcon, NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroHomeSolid, heroPhoneSolid, heroPhotoSolid, heroSquares2x2Solid} from "@ng-icons/heroicons/solid";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  imports: [
    NgOptimizedImage,
    NgIconComponent,
    NgIcon
  ],
  standalone: true,
  viewProviders: [provideIcons({heroHomeSolid,heroSquares2x2Solid,heroPhotoSolid,heroPhoneSolid})]
})

export class NavbarComponent{
  constructor() {
  }

}
