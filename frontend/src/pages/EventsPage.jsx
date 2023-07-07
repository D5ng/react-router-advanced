import EventsList from "../components/EventsList"
import { useLoaderData } from "react-router-dom"

export const EventLoader = async () => {
  const response = await fetch("http://localhost:8080/events")

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json()
    return resData.events
  }
}

function EventsPage() {
  const events = useLoaderData()
  console.log(events)
  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export default EventsPage
