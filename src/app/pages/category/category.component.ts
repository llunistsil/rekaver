import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICategories} from "../../shared/lib/categories-info";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute) {
  }
  category:ICategories;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({category}) => {
      this.category = category;
    })
    }
}
