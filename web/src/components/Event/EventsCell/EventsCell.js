import { Link, routes } from '@redwoodjs/router'

import Events from 'src/components/Event/Events'

export const beforeQuery = ({ start, end }) => {
  return { variables: { input: { start, end }} }
}

export const QUERY = gql`
  query FindEvents($input: EventsInput){
    events(input: $input) {
      id
      type
      date
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No events yet. '}
      <Link to={routes.newEvent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ events, start, end }) => {
  return <Events events={events} start={start} end={end} />
}
