import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router';
import React from 'react'

const EventsPage = () => {
  const {push} = useRouter();
  const events = getAllEvents();
  function findEventsHandler(year,month){
    const fullPath = `/events/${year}/${month}`
    push(fullPath)
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList
      items={events}
      />
    </div>
  )
}

export default EventsPage
