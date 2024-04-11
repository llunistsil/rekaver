import {ResolveFn, Router} from '@angular/router';
import {ICategories} from "../../lib/categories-info";
import {inject} from "@angular/core";
import {CategoryService} from "./category.service";
import {EMPTY} from "rxjs";


export const categoryResolver: ResolveFn<ICategories>= (route) => {
  const router = inject(Router);
  const cs = inject(CategoryService);
  const title = route.paramMap.get('title')!;
  if(!cs.getCategory(title)){
    router.navigate(['']);
    return EMPTY;
  }
  return cs.getCategory(title);
};
