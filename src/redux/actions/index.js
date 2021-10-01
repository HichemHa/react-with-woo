import {GET_PRODUCT,GET_PRODUCT_FAIL,GET_PRODUCT_SUCCESS,ADD_TO_CARD,GET_CARD,DELETE_FROM_CARD,UPDATE_CARD,QUANT_INCRIMENT,QUANT_DECRIMENT,PALCE_ORDER,
  PALCE_ORDER_SUCCESS,PALCE_ORDER_FAIL,GET_ORDER,GET_ORDER_SUCCESS,GET_ORDER_FAIL} from "../constants/actionsTypes";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// import axios from "axios";




export const getProductList = () => async (dispatch) => {  
    dispatch({ type: GET_PRODUCT});
    const api = new WooCommerceRestApi({
    url: "https://www.getting-web.website/wordpress",
    consumerKey: "ck_45558eb86f41f49e57724b8144389f50d5c8b285",
    consumerSecret: "cs_6dd24bb5d69e4abca08260d0b2dfd6833e9c0c98",
    version: "wc/v3"
  });
    try {
    const products = await  api.get("products");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: products.data });

  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.data })
  }
}


// card 

export const addToCard = (payload) => async (dispatch) => {
  await dispatch({ type: ADD_TO_CARD, payload });

}
export const getCard = () => async (dispatch) => {
  await dispatch({ type: GET_CARD });

}
export const deleteFromCard = (payload) => async (dispatch) => {
  await dispatch({ type: DELETE_FROM_CARD, payload });

}

export const updateCard = (payload) => async (dispatch) => {
  await dispatch({ type: UPDATE_CARD, payload });
}

export const quantIncriment = (payload) => (dispatch) => {
  dispatch({ type: QUANT_INCRIMENT, payload })
}
export const quantDecriment = (payload) => (dispatch) => {
  dispatch({ type: QUANT_DECRIMENT, payload })
}

//comaned


export const placeOrder = (order) => async (dispatch) => {
  await dispatch({ type: PALCE_ORDER });

  const apiz = new WooCommerceRestApi({
    url: "https://www.getting-web.website/wordpress",
    consumerKey: "ck_45558eb86f41f49e57724b8144389f50d5c8b285",
    consumerSecret: "cs_6dd24bb5d69e4abca08260d0b2dfd6833e9c0c98",
    version: "wc/v3",});
    try {
    const orderResult = await  apiz.post("orders",order);
    
    dispatch({ type: PALCE_ORDER_SUCCESS, payload: orderResult })
  } catch (error) {
    dispatch({ type: PALCE_ORDER_FAIL, payload: error.response.data });

  }
}

export const getAllOrder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER })
  const api = new WooCommerceRestApi({
    url: "https://www.getting-web.website/wordpress",
    consumerKey: "ck_45558eb86f41f49e57724b8144389f50d5c8b285",
    consumerSecret: "cs_6dd24bb5d69e4abca08260d0b2dfd6833e9c0c98",
    version: "wc/v3"});
  try {
    const getorderResult = await  api.post("products");
    dispatch({ type: GET_ORDER_SUCCESS, payload: getorderResult.data })
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.response.data })

  }
}