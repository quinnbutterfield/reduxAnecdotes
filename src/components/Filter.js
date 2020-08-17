import React from 'react'
import { filterChanger } from '../reducers/filterReducer'
import { connect } from 'react-redux'
const Filter = ({ filterChanger }) => {


  const changeFilter = (e) => {
    filterChanger(e.target.value)
  }

  return (
    <div style={{ marginBottom: 10, marginTop: 10 }}>
      <input
        onChange={changeFilter}
      />
    </div>
  )
}

export default connect (
  null,
  { filterChanger }
)(Filter)
