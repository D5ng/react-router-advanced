import React from "react"
import { json, useLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

function EventDetailPage() {
  const data = useLoaderData()
  console.log(data)

  return (
    <>
      <EventItem event={data.event} />
    </>
  )
}

export default EventDetailPage

export async function eventDetailLoader({ request, params }) {
  const id = params.id
  const response = await fetch(`http://localhost:8080/events/${id}`)

  if (!response.ok) throw json({ message: "Could not fetch details for selected event." }, { status: 500 })

  console.log(response)

  return response
}
