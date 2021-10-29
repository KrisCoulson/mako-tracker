export const schema = gql`
  type Event {
    id: Int!
    type: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    events(input: EventsInput): [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input EventsInput {
    start: DateTime!
    end: DateTime!
  }

  input CreateEventInput {
    type: String!
    date: DateTime!
  }

  input UpdateEventInput {
    type: String
    date: DateTime
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
