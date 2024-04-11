import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import {categoryResolver} from "./shared/services/category/category.resolver";

export const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path:"shop/:title",
    component:CategoryComponent,
    resolve:{category: categoryResolver}
  },
  {
    path:"**",
    redirectTo:"",
    component: HomeComponent,
  }
];
