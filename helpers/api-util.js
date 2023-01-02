export async function getAllEvents() {
    const response = await fetch('https://next-event-69f65-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}
export async function getFeaturedEvents() {
    const allEvent = await getAllEvents();
    return allEvent.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvent = await getAllEvents()
    return allEvent.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const allEvent = await getAllEvents()
    const {year, month} = dateFilter;
  
    let filteredEvents = allEvent.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  
    return filteredEvents;
}
