//action creators

let timeout

export const setNotification = (message, timer) => {
  return async dispatch => {
    console.log('clearing timer ', timeout)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      dispatch(clearMessage())
    }, timer * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message
    })

  }
}

export const notifyAdd = (content) => {
  return {
    type: 'SET_ADD_MESSAGE',
    data: content
  }
}




export const clearMessage = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}


const reducer = (state = null, action) => {
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_MESSAGE':
      return null
    default:
      return state
  }
}

export default reducer