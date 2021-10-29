import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { format } from 'date-fns'
import CreateEvent from 'src/components/CreateEvent/CreateEvent'

const EventsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold h-full overflow-hidden">
      <Toaster />
      <div className="flex flex-col h-full pb-24">
        <div className="flex items-center mx-4 my-6">
          <img src="MakoTracker.svg" className="w-16 h-16" /><span className="text-2xl font-bold">MakoTracker</span>
        </div>
        <div className="mx-4 mb-4 text-xl font-bold">
          {format(new Date, 'MM/dd/yyyy')}
        </div>
        <div className="flex-auto overflow-y-scroll" style={{"WebkitOverflowScrolling": "touch"}}>
          <main className="rw-main">{children}</main>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-white w-full">
        <div className="grid grid-cols-4 gap-4 m-4">
          <CreateEvent type="PEE">💦 <span>Pee</span></CreateEvent>
          <CreateEvent type="POOP">💩 <span>Poop</span></CreateEvent>
          <CreateEvent type="SLEEP">💤 <span>Sleep</span></CreateEvent>
          <CreateEvent type="EAT">🥕 <span>Eat</span></CreateEvent>
        </div>
      </div>

    </div>
  )
}

export default EventsLayout
