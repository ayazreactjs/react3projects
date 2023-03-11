import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from './theme'
const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="nav" style={{ backgroundColor: theme.backgroundColor }}>
      <h1 style={{ color: theme.color }}>React Js</h1>

      <div>
        <ul>
          <Link to="/" style={{ color: theme.color }} className="navLink">
            Birthday
          </Link>
          <Link to="/review" style={{ color: theme.color }} className="navLink">
            Review
          </Link>
          <Link
            to="/review2"
            style={{ color: theme.color }}
            className="navLink"
          >
            Review2
          </Link>
        </ul>
      </div>
      <button
        onClick={toggleTheme}
        className="btn"
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
      >
        Toggle Theme
      </button>
    </div>
  )
}
export default Nav
