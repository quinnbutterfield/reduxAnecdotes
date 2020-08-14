import React from 'react'
import { filterChanger } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
const Filter = () => {

  //const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const changeFilter = (e) => {
    dispatch(filterChanger(e.target.value))
  }

  return (
    <div style={{ marginBottom: 10, marginTop: 10 }}>
      <input
        onChange={changeFilter}
      />
    </div>
  )
}

export default Filter