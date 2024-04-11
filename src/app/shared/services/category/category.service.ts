import { Injectable } from '@angular/core';
import {categories, ICategories} from "../../lib/categories-info";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategory(title:string):ICategories {
    return <ICategories>categories.find(category => category.title === title);
  }
}
