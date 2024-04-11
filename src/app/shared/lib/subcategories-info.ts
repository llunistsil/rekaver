import {IProduct} from "./products-info";
import {productsForMetal} from "./producrs/roof/MetalTile";
import {forProfnastil} from "./producrs/roof/Profnastil";
import {forDoke, forKatepal, forTechno} from "./producrs/roof/FlexibleTile";

export interface ISubcategories{
  name:string,
  products:IProduct[],
}
export const roofSub:ISubcategories[]= [
  {
    name:"Металлочерепица",
    products:productsForMetal
  },
  {
    name:"Профнастил кровельный",
    products:forProfnastil
  },
  {
    name:"Гибкая черепица Katepal",
    products:forKatepal

  },
  {
    name:"Гибкая черепица ТЕХНОНИКОЛЬ",
    products:forTechno
  },
  {
    name:"Гибкая черепица Дёке",
    products:forDoke
  },
  {
    name:"Натуральная черепица",
    products:[]
  }
]
export const drainSub:ISubcategories[]= [
  {
    name:"Металлическая водосточкая система",
    products:[]
  },
  {
    name:"Пластиковая водосточная система",
    products:[]
  }
]
export const partsSub:ISubcategories[] = [
  {
    name:"Комплектующие",
    products:[]
  },
  {
    name:"Доборные элементы",
    products:[]
  },
  {
    name:"Флюгеры",
    products:[]
  }
]
