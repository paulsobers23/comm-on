const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'Content-Type': 'application/json' } : {},
}).then((response) => {
  if (response.status >= 400) {
    return response.json().catch((err) => {
      const error = new Error('Something went wrong');
      error.data = err;
      throw error;
    });
  }
  return response;
});

const getEvents = async () => {
  const response = await requestMethod('GET', '/events')
  const data = await response.json();
  const events = data.forEach((event) =>{
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
            <time datetime="2016-1-1">${new Date(event.date_time)}</time>
          </section>
        </section>
        <footer class="card-footer">
            <a href="#" class="card-footer-item" onclick=RSVPEvent(${event.id})}>RSVP</a>

            <button onClick="removeEvent(${event.id})">Delete Event</button>
        </footer>
      </section>`;
  });
  return events
}

const updateEvent = (id) => {
  const form = document.getElementById('updateEvent');
  const button = document.getElementById('');
};

const removeEvent = (id) => {
  const response = requestMethod('DELETE', `/events/${id}`);
  window.location.reload();
};

window.addEventListener('load', () =>{
  getEvents()
})