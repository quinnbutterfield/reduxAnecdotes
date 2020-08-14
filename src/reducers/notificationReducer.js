//action creators
export const notifyVote = (anecdote) => {

  return {
    type: 'SET_VOTE_MESSAGE',
    data:  anecdote.content

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
    case 'SET_VOTE_MESSAGE':
      return `you voted for '${action.data}'`
    case 'SET_ADD_MESSAGE':
      return `you added the anecdote '${action.data}'`
    case 'CLEAR_MESSAGE':
      return null
    default:
      return state
  }
}

export default reducer