
import {
    ADD_TO_CARD, DELETE_FROM_CARD, GET_CARD, UPDATE_CARD,
    QUANT_INCRIMENT, QUANT_DECRIMENT, PALCE_ORDER,GET_ORDER_FAIL,
    GET_ORDER,
    GET_ORDER_SUCCESS,PALCE_ORDER_SUCCESS,PALCE_ORDER_FAIL
} from '../constants/actionsTypes';

const initialCard = {
    card: [],
    user: null,
    somme: 0,
    allcard: [],
    loading: false,
    errors: null,
    response:""
}

const cardReducer = (state = initialCard, { type, payload }) => {
    switch (type) {
        case ADD_TO_CARD:
            return {
                ...state,
                card: state.card.concat(payload),
            }
        case GET_CARD:
            return {
                ...state
            }
        case DELETE_FROM_CARD:
            return {
                ...state,
                card: state.card.filter((el, i) => el.id !== payload) 
            }
        case UPDATE_CARD:
            return {
                ...state,
                card: state.card.map((el) => el._id === payload.id ? el.qtn = payload.qtn : el)
            }
        case QUANT_INCRIMENT:
            return {
                ...state,
                card: state.card.filter((el, i) => i == payload ? el.quantit++ : [])
            }
        case QUANT_DECRIMENT:
            return {
                ...state,
                card: state.card.filter((el, i) => i == payload ? el.quantit-- : [])
            }
        case PALCE_ORDER:
            return {
                ...state,
                loading:true
            }
        case GET_ORDER:
            return {
                ...state,
                loading: true
            }
        case GET_ORDER_SUCCESS:
          
            return {
                ...state,
                allcard: payload,
                loading: false
            }
        case GET_ORDER_FAIL:
            return {
                loading: false,
                errors: payload
            }
              case PALCE_ORDER_SUCCESS :
                  return{
                        loading: false,
                        response : payload.data
                  }
              case PALCE_ORDER_FAIL :
                  return{
                        loading: false,
                        errors : payload
                  }

        default:
            return state;

    }
}

export default cardReducer;