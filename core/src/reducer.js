import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

export function combine (states) {
  const enhancer = compose(applyMiddleware(thunk))
  const rootReducer = combineReducers(states)
  const store = createStore(rootReducer, enhancer)

  for (const i in states) {
    states[i].dispatch = store.dispatch
    states[i].getState = (stateName) => {
      if (stateName === true) return store.getState()
      return store.getState()[states[i]._name]
    }
  }

  return store
}
