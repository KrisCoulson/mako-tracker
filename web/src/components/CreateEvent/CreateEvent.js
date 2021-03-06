import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"
import { QUERY } from "../Event/EventsCell/EventsCell"
import { startOfToday, endOfToday } from "date-fns"
const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`

const CreateEvent = ({ type, start, end, children }) => {
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { input: { start: startOfToday(), end: endOfToday()}} }],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Event created')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleCreate = () => {
    const date = new Date().toISOString()

    createEvent({ variables: { input: { type, date } } })
  }
  return (
    <button className="py-2 px-3 bg-gray-100 border-2 rounded flex flex-col items-center justify-center" onClick={handleCreate}>{ children }</button>
  )
}

export default CreateEvent
