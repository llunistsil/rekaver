import { Component } from '@angular/core';
import {NgIcon, NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroHomeSolid, heroPhoneSolid, heroPhotoSolid, heroSquares2x2Solid} from "@ng-icons/heroicons/solid";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {heroEnvelope, heroPhone} from "@ng-icons/heroicons/outline";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon,NgIconComponent,MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({heroEnvelope,heroPhoneSolid,heroPhone,heroPhotoSolid,heroSquares2x2Solid,heroHomeSolid})]
})
export class NavbarComponent {
  email = "suvorovka04@gmail.com";

}
