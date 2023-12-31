import { Link } from "react-router-dom"
import classes from "./EventsList.module.css"
import EventItem from "./EventItem"

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events &&
          events.map((event) => (
            // <EventItem key={event.id} events={events} />
            <li key={event.id} className={classes.item}>
              <Link to={`/events/${event.id}`}>
                <img src={event.image} alt={event.title} />
                <div className={classes.content}>
                  <h2>{event.title}</h2>
                  <time>{event.date}</time>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default EventsList
