import { productConstants } from "../actions/constants";

const initState = {
    products: [],
    productsByPrice: {
        under200: [],
        under300: [],
        under500: []

    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }

            break;

        default:
            break;
    }
    return state
}