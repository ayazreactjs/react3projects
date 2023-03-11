import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import data from './data'
import { ThemeContext } from '../theme'

const Review = () => {
  const { theme } = useContext(ThemeContext)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % data.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const { name, job, image, text } = data[index]

  const handlePrev = () => {
    setIndex((index + data.length - 1) % data.length)
  }

  const handleNext = () => {
    setIndex((index + 1) % data.length)
  }

  const handleRandom = () => {
    let randomIndex = index
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * data.length)
    }
    setIndex(randomIndex)
  }

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className="revContainer"
    >
      <h1>useState App</h1>
      <div className="revContent">
        <div>
          <img src={image} alt={name} className="revImg" />
        </div>
        <div>{name}</div>
        <div>{job}</div>
        <p>{text}</p>
        <div className="btnBox">
          <button
            onClick={handlePrev}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={handleRandom}
            style={{
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            Random
          </button>
          <button
            onClick={handleNext}
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
