import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import { Rootdata } from "./Interface";

const productData =(data=[],action:Rootdata)=>{

    switch(action.type){
        case SET_PRODUCT_LIST:
            console.log("SET_LIST Condition",action.data)
            return [...action.data]
        
        default:
            return [...data];
            

    }
      
}

export default productData