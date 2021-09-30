import {GET_PRODUCT,GET_PRODUCT_FAIL,GET_PRODUCT_SUCCESS} from "../constants/actionsTypes";

const initialState = {
    loading: false,
    errors: null,
    product: null,
}


const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:

            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
        default:
            return state;
    }
}
export default productReducer;