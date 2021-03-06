import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import {productReducer, singleProductReducer} from './product'
import {cartReducer} from './cart'
import orderHistoryReducer from './orderHistory'

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  orderHistory: orderHistoryReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
