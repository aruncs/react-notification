import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
  notifications : [{
    "key" : 1,
    "text" : "Hello!!! How are you?",
    "duration" : 2000
  },{
    "key" : 2,
    "text" : "Document created successfully..",
    "duration" : 0
  },{
    "key" : 3,
    "text" : "Deletion of doc is not possible",
    "duration" : 2000
  },{
    "key" : 4,
    "text" : "Balance updated",
    "duration" : 4000
  },{
    "key" : 5,
    "text" : "User created",
    "duration" : 2000
  }]
}

const store = createStore(reducer,initialState)

export default store
