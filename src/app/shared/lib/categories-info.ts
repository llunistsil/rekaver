import {drainSub, ISubcategories, partsSub, roofSub} from "./subcategories-info";

export interface ICategories{
  title:string,
  name:string,
  image:string,
  icon:string,
  subcategories:ISubcategories[],
}
export const categories:ICategories[] = [
  {
    title:"roof",
    name:"Кровля",
    image:"assets/images/categories/roof.png",
    icon:"/assets/icons/categories.svg#roof",
    subcategories:roofSub
  },
  {
    title:"drain",
    name:"Водосток",
    image:"assets/images/categories/drain.png",
    icon:"/assets/icons/categories.svg#drain",
    subcategories:drainSub
  },
  {
    title:"roof-components",
    name:"Комплектующие",
    image:"assets/images/categories/parts.png",
    icon:"/assets/icons/categories.svg#roof-components",
    subcategories:partsSub
  },
  {
    title:"facade",
    name:"Фасад",
    image:"assets/images/categories/facade.png",
    icon:"/assets/icons/categories.svg#facade",
    subcategories:partsSub
  },
  {
    title:"fence",
    name:"Ограждения",
    image:"assets/images/categories/fence.png",
    icon:"/assets/icons/categories.svg#fence",
    subcategories:partsSub
  },
  {
    title:"insulation",
    name:"Утепление и изоляция",
    image:"assets/images/categories/insulation.png",
    icon:"/assets/icons/categories.svg#insulation",
    subcategories:partsSub
  }
];
