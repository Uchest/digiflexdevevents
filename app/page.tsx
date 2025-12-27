import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { cacheLife } from 'next/cache';
import { events } from '@/lib/constants';

const page = async () => {
  'use cache';
  cacheLife('hours');

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev
        <br /> event You Can&apos;t Miss
      </h1>

      <p className="text-center mt-5">
        Hackathons, Meetups, and conferences, All in One Place
      </p>

      <ExploreBtn />

      <div id="events" className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.length > 0 &&
            events.map(event => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
