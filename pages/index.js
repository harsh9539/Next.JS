import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/dummy-data'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const featuredItems = getFeaturedEvents();
  console.log(featuredItems);
  return (
    <div>
      <EventList items={featuredItems}/>
    </div>
  )
}
