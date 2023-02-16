import {getFeaturedEvents} from '../helpers/api-util';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage({events}) {
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
