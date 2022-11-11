import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList({items}) {
  return (
    <ul className={classes.list}>
      {items.map(({id, title, image, location, date}) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          image={image}
          location={location}
          date={date}
        />
      ))}
    </ul>
  );
}

export default EventList;