import { db } from 'src/lib/db'
import { startOfDay, endOfDay } from 'date-fns'
import { zonedTimeToUtc} from 'date-fns-tz'
export const events = () => {
  const date = zonedTimeToUtc(new Date(), 'America/Los_Angeles')

  return db.event.findMany(
    {
      where: {
        createdAt: {
          gte: startOfDay(date),
          lt:  endOfDay(date)
        },
      },
      orderBy: {
        date: 'desc'
      }
    }
  )
}

export const event = ({ id }) => {
  return db.event.findUnique({
    where: { id },
  })
}

export const createEvent = ({ input }) => {
  return db.event.create({
    data: input,
  })
}

export const updateEvent = ({ id, input }) => {
  return db.event.update({
    data: input,
    where: { id },
  })
}

export const deleteEvent = ({ id }) => {
  return db.event.delete({
    where: { id },
  })
}
