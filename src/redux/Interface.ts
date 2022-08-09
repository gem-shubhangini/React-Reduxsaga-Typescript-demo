
export type data={

    name?:string 
    type?:string 
    price?:number
    color?:string
   
}
 
export interface Product {
    id: number;
    name: string;
    color: string;
    price: string;
    category: string;
    brand: string;
    photo: string;
}

export interface Rootdata{
    type?:string;
    data:Product[]|string[];

    
}
export interface Action {
    type?:string
    data:Product
}