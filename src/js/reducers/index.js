import constants from "../constants"

function reducer(state,action){
    switch (action.type) {
      case constants.actions.addNotification:
        return Object.assign({},state,{"notifications" : state.notifications.concat(action.payload)})
      case constants.actions.removeNotification:
        return Object.assign({},state,{"notifications" : state.notifications.slice().splice(1)})
      default:
        return state
    }
}

export default reducer
