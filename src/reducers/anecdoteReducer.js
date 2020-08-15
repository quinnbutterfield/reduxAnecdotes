
import anecdoteService from '../services/anecdotes'
//action creators
export const voteFor = (anecdote) => {
  return async dispatch => {
    await anecdoteService.updateVote(anecdote)
    dispatch({
      type: 'VOTE',
      data:
        anecdote

    })
  }
}



export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      return (
        state.map(anecdote =>
          anecdote.id !== action.data.id ? anecdote
            : { ...anecdote, votes: anecdote.votes+1 }
        )
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer