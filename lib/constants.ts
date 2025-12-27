export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: 'React Summit 2025',
    image: '/images/event1.png',
    slug: 'react-summit-2025',
    location: 'Amsterdam, Netherlands',
    date: 'June 5-6, 2025',
    time: '09:00 AM',
  },
  {
    title: 'Next.js Conf 2025',
    image: '/images/event2.png',
    slug: 'nextjs-conf-2025',
    location: 'San Francisco, CA',
    date: 'October 21-22, 2025',
    time: '10:00 AM',
  },
  {
    title: 'TypeScript Summit',
    image: '/images/event3.png',
    slug: 'typescript-summit',
    location: 'Berlin, Germany',
    date: 'September 10-11, 2025',
    time: '08:30 AM',
  },
  {
    title: 'JavaScript Global Summit',
    image: '/images/event4.png',
    slug: 'js-global-summit',
    location: 'London, UK',
    date: 'July 15-16, 2025',
    time: '09:00 AM',
  },
  {
    title: 'Web Development Bootcamp Hackathon',
    image: '/images/event5.png',
    slug: 'web-dev-bootcamp-hackathon',
    location: 'Austin, TX',
    date: 'August 2-3, 2025',
    time: '06:00 PM',
  },
  {
    title: 'Frontend Masters Conference',
    image: '/images/event6.png',
    slug: 'frontend-masters-conf',
    location: 'New York, NY',
    date: 'November 12-13, 2025',
    time: '10:30 AM',
  },
];
