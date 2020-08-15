import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notifyAdd, clearMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'



const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
    dispatch(notifyAdd(content))
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
