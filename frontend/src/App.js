import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EventsPage, { EventLoader } from "./pages/EventsPage"
import NewEventPage, { newEventAction } from "./pages/NewEventPage"
import EventDetailPage, { eventDetailLoader, eventDetailAction } from "./pages/EventDetailPage"
import EditEventPage from "./pages/EditEventPage"
import RootPage from "./pages/RootPage"
import EventsRoot from "./pages/EventsRoot"
import Error from "./pages/Error"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: EventLoader,
            },
            {
              path: ":id",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                { index: true, element: <EventDetailPage />, action: eventDetailAction },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
