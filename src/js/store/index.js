import { createStore } from "redux"
import reducer from "../reducers"

// Only for testing
import notifications from "../../data/notifications.js"

let initialState = {
  "notifications" : notifications
}
const store = createStore(reducer,initialState)
//const store = createStore(reducer)

export default store
