import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import CreateEvent from 'src/components/CreateEvent/CreateEvent'

import { QUERY } from 'src/components/Event/EventsCell'

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: Int!) {
    deleteEvent(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleTimeString()}
    </time>
  )
}

const TYPES = {
  PEE: '💦',
  POOP: '💩',
  EAT: '🥕',
  SLEEP: '💤'
}

const EventsList = ({ events }) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } })
    }
  }

  return (
    <div className="">
      {JSON.stringify(events)}
      {events.map((event) => (
        <div key={event.id} className="flex bg-gray-100 border-2 border-gray-300 p-3 rounded items-center mb-4">
          <div className="border-r-2 pr-2 border-gray-300 text-4xl">{TYPES[event.type]}</div>
          <div className="pl-2">{timeTag(event.date)}</div>
          <div className="flex-1 flex justify-end">
            <nav className="">
              <Link
                to={routes.editEvent({ id: event.id })}
                title={'Edit event ' + event.id}
                className="block font-bold uppercase text-sm text-right"
              >
                Edit
              </Link>
              <button
                type="button"
                title={'Delete event ' + event.id}
                className="text-red-500 font-bold uppercase text-sm text-right"
                onClick={() => onDeleteClick(event.id)}
              >
                Delete
              </button>
            </nav>
            </div>
        </div>
      ))}
    </div>
  )
}

export default EventsList
