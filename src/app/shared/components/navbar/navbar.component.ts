import { Component } from '@angular/core';
import {NgIcon, NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroHomeSolid, heroPhoneSolid, heroPhotoSolid, heroSquares2x2Solid} from "@ng-icons/heroicons/solid";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon,NgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({heroPhoneSolid,heroPhotoSolid,heroSquares2x2Solid,heroHomeSolid})]
})
export class NavbarComponent {

}
