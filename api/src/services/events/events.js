import { db } from 'src/lib/db'
import { endOfToday, endOfYesterday, startOfToday, startOfTomorrow, startOfYesterday } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import { logger } from 'src/lib/logger'
export const events = ({ input: { start, end }}) => {
  logger.info({ start, end })
  return db.event.findMany(
    {
      where: {
        date: {
          gte: start,
          lt:  end
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
