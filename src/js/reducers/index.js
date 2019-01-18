function reducer(state,action){
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return Object.assign({},state,{"notifications" : state.notifications.concat(action.payload)})
        break;
      case "REMOVE_NOTIFICATION":
        return Object.assign({},state,{"notifications" : state.notifications.slice().splice(1)})
        break;
      default:
        return state
    }
}

export default reducer
