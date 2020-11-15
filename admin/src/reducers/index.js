import { combineReducers } from 'redux'
import authReducer from './authR'
import userReducer from './userR'
import productReducer from './productR'
import categoryReducer from './categoryR'
import orderReducer from './orderR'


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
})
export default rootReducer