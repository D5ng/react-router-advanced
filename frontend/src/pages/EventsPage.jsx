import EventsList from "../components/EventsList"
import { json, useLoaderData } from "react-router-dom"

export const EventLoader = async () => {
  const response = await fetch("http://localhost:8080/eventsfsdfds")

  if (!response.ok) {
    throw json({ message: "Could Not fetch events" }, { status: 500 })
    // throw new Response(JSON.stringify({ message: "Could Not fetch events" }), { status: 500 })
  } else {
    const resData = await response.json()
    return resData
  }
}

function EventsPage() {
  const { events, isError, message } = useLoaderData()

  if (isError) {
    return <p>{message}</p>
  }

  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export default EventsPage
