import React, { useState, useContext } from 'react'
import { ThemeContext } from '../theme'
import datas from './datas'
const Birthday = () => {
  const { theme } = useContext(ThemeContext)
  const [persons, setPersons] = useState(datas)
  const [showDatas, setShowDatas] = useState(true)
  const toggleDatas = () => {
    setShowDatas(!showDatas)
    if (!showDatas) {
      setPersons(datas)
    } else {
      setPersons([])
    }
  }
  return (
    <div
      className="main"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="bContainer">
        <h1>birthday Reminder : {persons.length}</h1>
        {persons.map((person) => {
          return (
            <div key={person.id} className="bContent">
              <div className="bData">
                <img src={person.image} alt={person.name} className="bImg" />
                <div>&nbsp;{person.name}&nbsp;</div>
                <div>{person.age}&nbsp;year old</div>
              </div>
            </div>
          )
        })}
        <button onClick={toggleDatas} style={{ marginBottom: '5px' }}>
          {showDatas ? 'rub out 🍰' : 'Hurray 🎂'}
        </button>
      </div>
    </div>
  )
}
export default Birthday
