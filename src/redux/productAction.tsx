
import { PRODUCT_LIST ,SEARCH_PRODUCT} from "./constant"
import { Product } from "./Interface";

export const productList =() => {
    /*let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data =await data.json()
    console.warn("action called",data)*/
    return {
        type:PRODUCT_LIST,
         
}
}

export const productSearch =(query:any) => {
    /*let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data =await data.json()
    console.warn("action called",data)*/
    return {
        type:SEARCH_PRODUCT,
         query
}
}