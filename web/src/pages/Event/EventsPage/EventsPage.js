import { useContext  } from 'react'
import { DateContext } from 'src/layouts/EventsLayout'
import EventsCell from 'src/components/Event/EventsCell'
import { startOfToday, endOfToday, startOfDay, endOfDay } from 'date-fns'

const EventsPage = () => {
  const [date] = useContext(DateContext)
  const start = startOfDay(new Date(date))
  const end = endOfDay(new Date(date))
  return(
    <>
      <EventsCell start={start} end={end} />
    </>
  )
}

export default EventsPage
