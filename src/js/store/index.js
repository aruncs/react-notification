import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
  notifications : [{
    "key" : 1,
    "text" : "Hello!!! How are you?",
    "time" : 2000
  },{
    "key" : 2,
    "text" : "Document created successfully.... sknvlksnvknsln ...sjabnvknasnvkns...sfnjksan cvkjasnsac aslc",
    "time" : 1000
  },{
    "key" : 3,
    "text" : "Deletion of doc is not possible",
    "time" : 2000
  },{
    "key" : 4,
    "text" : "Balance updated",
    "time" : 4000
  },{
    "key" : 5,
    "text" : "User created",
    "time" : 2000
  }]
}

const store = createStore(reducer,initialState)

export default store
