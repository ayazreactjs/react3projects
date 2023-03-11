import React, { useReducer, useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import data from './data'
import { ThemeContext } from '../theme'
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case 'nextData':
      return { ...state, index: (state.index + 1) % data.length }
    case 'prevData':
      return { ...state, index: (state.index + data.length - 1) % data.length }
    case 'randomData':
      let randomIndex = state.index
      while (randomIndex === state.index) {
        randomIndex = Math.floor(Math.random() * data.length)
      }
      return {
        ...state,
        index: randomIndex,
      }
  }
}
const Review = () => {
  const { theme } = useContext(ThemeContext)
  const [state, dispatch] = useReducer(reducer, { index: 0 })
  const { name, job, image, text } = data[state.index]
  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className="revContainer"
    >
      <h1>UseReducer App</h1>
      <div className="revContent">
        <div>
          <img src={image} alt={name} className="revImg" />
        </div>
        <div>{name}</div>
        <div>{job}</div>
        <p>{text}</p>
        <div className="btnBox">
          <button
            onClick={() => dispatch({ type: 'nextData' })}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => dispatch({ type: 'randomData' })}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            Random
          </button>
          <button
            onClick={() => dispatch({ type: 'prevData' })}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Review
