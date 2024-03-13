import { Component } from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroEnvelope, heroPhone} from "@ng-icons/heroicons/outline";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIcon,
    NgForOf,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders:[provideIcons({heroPhone,heroEnvelope})]
})
export class FooterComponent {
  email = "xxxxxxxxxxxxxxx";
  phoneNumbers:{text:string,link:string}[] = [
    {text:"+XXXXXXXXXX",link:"+XXXXXXXXX"},
    {text:"+XXXXXXXXXX",link:"+XXXXXXXXX"}
  ];
  info = "Большой выбор качественной и недорогой кровли для вашей стройки.\n" +
    "Работаем напрямую с производителями. Гарантия низкой цены. Доставка по всем городам КМВ.\n" +
    "Директор ООО \"Рекавер\" в Пятигорске: Попов Юрий Анастасович"


}
