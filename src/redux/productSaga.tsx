
import { type } from 'os';
import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT,SERACH_LIST } from './constant'
import {Product} from './Interface'
 import {Rootdata} from './Interface'


function*  getProducts<Product>():Generator<any>{
   // console.warn("call api here")
    
   let data:any= yield  fetch("http://localhost:3500/product")
     data =yield data.json();
    console.warn("result of get product",data)
    yield put({type:SET_PRODUCT_LIST,data})
     

}

function*  searchProducts<Product>(result:any):Generator<any>{
  // console.warn("call api here")
   
  let resp:any= yield  fetch(`http://localhost:3500/product?q=${result.query}`)
    resp =yield resp.json();
   console.warn("result of get product",resp)
   yield put({type:SET_PRODUCT_LIST,result:resp})
    

}

function* productSaga(){
 yield takeEvery(PRODUCT_LIST,getProducts)
 yield takeEvery(SEARCH_PRODUCT,searchProducts)
}
export default productSaga