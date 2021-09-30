import {GET_PRODUCT,GET_PRODUCT_FAIL,GET_PRODUCT_SUCCESS} from "../constants/actionsTypes";
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
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.response.data })
  }
}

