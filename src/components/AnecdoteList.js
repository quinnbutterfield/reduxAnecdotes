import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotes, filter, setNotification, voteFor }) => {



  const vote = (anecdote) => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    voteFor(votedAnecdote)
    setNotification(`you voted for '${anecdote.content}'`, 5)
  }
  let filteredAnecdotes = anecdotes.filter(
    anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
  let sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  return(
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteFor, setNotification
}

const connectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdoteList