import axios from 'axios';
// import { bindActionCreators } from 'redux';
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_NAMEPRODUCTS = 'GET_NAMEPRODUCTS'
export const SET_NAME = 'SET_NAME'
export const GET_BRANDS = 'GET_BRANDS'
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE'
export const GET_DETAILS = 'GET_DETAILS'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const POST_PRODUCT = ' POST_PRODUCT'
export const DELETE_PRODUCT = ' DELETE_PRODUCT'




export function getProducts() {
    return async function(dispatch){
        try{
            var json = await axios("/products");
            return dispatch({
                type: GET_PRODUCTS,
                payload: json.data
            })
        } catch{console.log('error en la api')}
    }
}

export function getNameProduct(name){
    
    return async function(dispatch){
        try{
            var json = await axios("/products?name="+name);
            return dispatch ({
                type : GET_NAMEPRODUCTS,
                payload: json.data
            })
        }catch (error){
            console.log(error)
        }
    }
}

export function setFilterName(name){
    return ({
        type : SET_NAME,
        payload: name
    })

}

export function getBrands(){
    return async function (dispatch) {
        try{

            var info = await axios("/brands");
            return dispatch({ 
                type: GET_BRANDS,
                payload: info.data
            })
        }catch{console.log('error api type')}
    }
}

export  function postNewProduct(body){
    return async function(dispatch){
   console.log("EN ACCION POST");
    const response = await axios.post("/product", body);
    return dispatch({
        type:  POST_PRODUCT,
        payload: response.data
    });
}
}

export async function putProduct(id, body){
    return async function(dispatch){

    const response = await axios.put("/products/"+id, body);
    return dispatch({
        type: UPDATE_PRODUCT,
        payload: response.data
    });
}

}

export function filterByBrand(payload){
   
    return{
        type: FILTER_BY_BRAND,  
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPrice(payload){
    return{
        type: ORDER_BY_PRICE,
        payload
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("/products/"+id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
 }
 export function deleteProduct(id){
    return async function(dispatch){
        try{
            console.log("en accion")
            var json = await axios.delete(`/products/${id}`);
            console.log(json.data)

            return dispatch({
                type: DELETE_PRODUCT,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
 }