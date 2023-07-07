import React from "react"
import { useParams } from "react-router-dom"

function EventDetailPage() {
  const params = useParams()

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Params Id: {params.id}</p>
    </>
  )
}

export default EventDetailPage
