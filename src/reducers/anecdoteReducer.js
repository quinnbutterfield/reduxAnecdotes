
//action creators
export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: content
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

//const getId = () => (100000 * Math.random()).toFixed(0)

//const asObject = (anecdote) => {
//  return {
//    content: anecdote,
//    id: getId(),
//   votes: 0
//  }
//}

const reducer = (state = [], action) => {
  // eslint-disable-next-line no-undef
  switch(action.type) {
    case 'VOTE':
      return (
        state.map(anecdote =>
          anecdote.id !== action.data.id ? anecdote
            : { ...anecdote, votes: anecdote.votes+1 }
        )
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data.content]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer