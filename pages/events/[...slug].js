import EventList from '@/components/events/event-list';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
import React from 'react'

const FilteredEventPage = () => {
  const {query} = useRouter();

  const filteredData = query.slug;
  if(!filteredData){
    <p className='center'>Loading....</p>
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if(isNaN(numYear) || isNaN(numMonth)){
    return <p>Please check the url</p>
  }

  const filterdItems = getFilteredEvents({
    year:numYear,
    month:numMonth
  })

  if(!filterdItems || filterdItems.length === 0){
    return <p>No items found for choosen filter</p>
  }

  return (
    <div>
      <EventList
      items={filterdItems}
      />
    </div>
  )
}

export default FilteredEventPage
