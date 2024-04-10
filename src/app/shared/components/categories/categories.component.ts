import { Component } from '@angular/core';
import {categories, ICategories} from "../../lib/categories-info";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  protected categories:ICategories[] = categories;

  mouseEnter(category:ICategories):void{
    let target = document.getElementById(category.name);
    if (target) target.classList.add("bg-neutral-800/90");

  }
  mouseLeave(category:ICategories):void{
    let target = document.getElementById(category.name);
    if (target) target.classList.remove("bg-neutral-800/90");
  }

}
