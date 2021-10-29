import EventsCell from 'src/components/Event/EventsCell'
import { startOfToday, endOfToday } from 'date-fns'
const EventsPage = () => {
  return(
    <>

      <EventsCell start={startOfToday()} end={endOfToday()} />
    </>
  )
}

export default EventsPage
