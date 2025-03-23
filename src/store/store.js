import { combineReducers, createStore } from 'redux'

import { userReducer } from "././reducers/user.reducer"
import { systemReducer } from './reducers/system.reducer'
const rootReducer = combineReducers({
  userModule: userReducer,
  systemModule: systemReducer,
})


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer)

window.gStore = store
store.subscribe(() => {
  console.log('Current state is:', store.getState())
})