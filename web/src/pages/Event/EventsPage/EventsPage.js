import EventsCell from 'src/components/Event/EventsCell'
import { startOfToday, endOfToday } from 'date-fns'

const EventsPage = () => {
  const start = startOfToday()
  const end = endOfToday()

  return(
    <>
      <EventsCell start={start} end={end} />
    </>
  )
}

export default EventsPage
