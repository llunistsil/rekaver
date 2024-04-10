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
  email = "suvorovka04@gmail.com";
  phoneNumbers:{text:string,link:string}[] = [
    {text:"+7-962-010-88-77",link:"+79620108877"},
    {text:"+7-903-444-55-10",link:"+79034445510"}
  ];
  info = "Большой выбор качественной и недорогой кровли для вашей стройки.\n" +
    "Работаем напрямую с производителями. Гарантия низкой цены. Доставка по всем городам КМВ.\n" +
    "Директор ООО \"Рекавер\" в Пятигорске: Попов Юрий Анастасович"


}
