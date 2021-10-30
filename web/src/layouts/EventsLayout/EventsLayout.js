import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { add, format, sub, isToday, isFuture} from 'date-fns'
import CreateEvent from 'src/components/CreateEvent/CreateEvent'
import { createContext } from 'react';

export const DateContext = createContext()

const EventsLayout = ({ children }) => {
  const date = format(new Date(), 'MM/dd/yyyy')
  const [context, setContext] = useState(date);

  return (
    <DateContext.Provider value={[context, setContext]}>
    <div className="rw-scaffold h-full overflow-hidden">
      <Toaster />
      <div className={`flex flex-col h-full ${isToday(new Date(context)) && 'pb-24'}`}>
        <div className="flex items-center mx-4 my-6">
          <img src="MakoTracker.svg" className="w-16 h-16" /><span className="text-2xl font-bold">MakoTracker</span>
        </div>
        <div className="mx-4 mb-4 text-xl font-bold">
          {format(new Date(context), 'MM/dd/yyyy')}
        </div>
        <div className="flex mx-4 mb-4">
          <button className="rounded flex items-center justify-start border-2 border-gray-500 p-3 mr-3 w-1/2" onClick={() => setContext(sub(new Date(context), { days: 1 }))}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>{format(sub(new Date(context), { days: 1 }), 'MM/dd/yyyy')}</button>
          {(!isToday(new Date(context)) || isFuture(new Date(context))) && <button className="rounded flex items-center justify-end border-2 border-gray-500 w-1/2" onClick={() => setContext(add(new Date(context), { days: 1 }))}>
          {format(add(new Date(context), { days: 1 }), 'MM/dd/yyyy')}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          </button>}
        </div>
        <div className="flex-auto overflow-auto">
          <main className="rw-main">{children}</main>
        </div>
      </div>
      {isToday(new Date(context)) &&
      <div className="absolute bottom-0 left-0 bg-white w-full">
        <div className="grid grid-cols-4 gap-4 m-4">
          <CreateEvent type="PEE">💦 <span>Pee</span></CreateEvent>
          <CreateEvent type="POOP">💩 <span>Poop</span></CreateEvent>
          <CreateEvent type="SLEEP">💤 <span>Sleep</span></CreateEvent>
          <CreateEvent type="EAT">🥕 <span>Eat</span></CreateEvent>
        </div>
      </div>
      }
    </div>
    </DateContext.Provider>
  )
}

export default EventsLayout
