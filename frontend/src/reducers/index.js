import { combineReducers } from 'redux'

import categoryReducer from './categoryR'
import productReducer from './productR'


const rootReducer = combineReducers({

    category: categoryReducer,
    product: productReducer
})
export default rootReducer