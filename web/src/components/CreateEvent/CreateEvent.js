import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"
import { QUERY } from "../Event/EventsCell/EventsCell"

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`

const CreateEvent = ({ type, children }) => {
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    refetchQueries: [{ query: QUERY }],
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
    <button className="py-2 px-3 bg-gray-300 border-2 border-gray-500 rounded flex flex-col items-center justify-center" onClick={handleCreate}>{ children }</button>
  )
}

export default CreateEvent
