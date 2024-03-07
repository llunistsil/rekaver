import { Component } from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroEnvelope, heroPhone} from "@ng-icons/heroicons/outline";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders:[provideIcons({heroPhone,heroEnvelope})]
})
export class FooterComponent {
  email = "suvorovka04@gmail.com"


}
