
import { type } from 'os';
import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'
import {Product} from './Interface'
 import {Rootdata} from './Interface'


function*  getProducts<Product>():Generator<any>{
   // console.warn("call api here")
    
   let data:any= yield  fetch("http://localhost:3500/product")
     data =yield data.json();
    console.warn("result of get product",data)
    yield put({type:SET_PRODUCT_LIST,data})
     

}


function* productSaga(){
 yield takeEvery(PRODUCT_LIST,getProducts)
}
export default productSaga