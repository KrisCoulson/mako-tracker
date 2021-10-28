import { db } from 'src/lib/db'
import { startOfDay, endOfDay } from 'date-fns'
export const events = () => {
  const date  = new Date('2021-10-28')

  console.log(date)
  console.log(new Date())



  return db.event.findMany(
    {
      where: {
        createdAt: {
          gte: startOfDay(date),
          lt:  endOfDay(date)
        },
      },
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
