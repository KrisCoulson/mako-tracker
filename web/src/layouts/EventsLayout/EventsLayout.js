import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { format } from 'date-fns'
import CreateEvent from 'src/components/CreateEvent/CreateEvent'

const EventsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <img src="/MakoTracker-512x512.png" />
      <div className="grid grid-cols-4 mx-4 my-6">
        <CreateEvent type="PEE">💦 Pee</CreateEvent>
        <CreateEvent type="POOP">💩 Poop</CreateEvent>
        <CreateEvent type="SLEEP">💤 Sleep</CreateEvent>
        <CreateEvent type="EAT">🥕 Eat</CreateEvent>
      </div>
      <div className="mx-4 my-6 text-xl font-bold">
        {format(new Date, 'MM/dd/yyyy')}
      </div>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EventsLayout
