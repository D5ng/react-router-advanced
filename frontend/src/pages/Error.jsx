import React from "react"
import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()

  console.log(error)

  let title = "An error occurred"
  let message = "Someting wend wrong!"

  if (error.status === 500) {
    // message = JSON.parse(error.data).message
    message = error.data.message
  }

  if (error.status === 404) {
    title = "Not Found!"
    message = "Could not find resource or page."
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  )
}

export default Error
