import { db } from 'src/lib/db'
import { startOfDay, endOfDay } from 'date-fns'
import { zonedTimeToUtc} from 'date-fns-tz'
export const events = () => {
  // const date = zonedTimeToUtc(new Date('2021-10-28'), 'America/Los_Angeles')
  // console.log({
  //   date,
  //   test: new Date('2021-10-28'),
  //   gte: startOfDay(date),
  //   lt:  endOfDay(date),
  //   oldGte: startOfDay(new Date('2021-10-28')),
  //   oldLt: endOfDay(new Date('2021-10-28'))
  // })

  const date = new Date('2021-10-29')
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
