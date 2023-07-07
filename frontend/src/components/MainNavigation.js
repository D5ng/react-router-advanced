import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "")
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={activeClass}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
