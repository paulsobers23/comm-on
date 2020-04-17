window.addEventListener('load', async() => {
    try {
      const response = await fetch('/events', {
        method: 'GET'
      });
      const events = await response.json();
  
      if (events.length === 0) {
        return events;
      }
  
      return events.forEach((event) => {
        document.getElementById('eventsSection').innerHTML += `
          <section class="card">
        <header class="card-header">
          <p class="card-header-title">
            ${event.title}
          </p>
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <section class="card-content">
          <section class="content">
            ${event.description}
            <br>
            <time datetime="2016-1-1">${event.date_time}</time>
          </section>
        </section>
        <footer class="card-footer">
            <a href="#" class="card-footer-item" onclick=RSVPEvent(${event.id})}>RSVP</a>
            <a href="#" class="card-footer-item">View More</a>
        </footer>
      </section>`;
      });
    } catch (err) {
      console.alert('error', err);
    }
  });
  
  // Fetch post to events to rsvp event
  const RSVPEvent = (eventId, userId) => {
    // Send Query to db
    fetch(`/events/${eventId, userId}`, {
      method: 'POST',
    });
    // Change event button
    document.getElementsByClassName('eventButtons').style.backgroundColor = 'red';
  };