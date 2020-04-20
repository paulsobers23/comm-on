const requestMethod = (method, url, data) =>
  fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {},
  }).then(response => {
    if (response.status >= 400) {
      return response.json().catch(err => {
        const error = new Error('Something went wrong');
        error.data = err;
        throw error;
      });
    }
    return response;
  });

const getEvents = async () => {
  const response = await requestMethod('GET', '/events');
  const data = await response.json();
  const events = data.forEach(event => {
    const section = document.getElementById('eventsSection');
    section.innerHTML += `
    <section class="card-content is-centered">
    <section class="content is-centered">
      <p id="eventDescription" class="subtitle has-text-centered">${event.description}</p>

      <p><b>${event.type}</b></p>
      <br>
      <time id="eventTime" class="card-header-title is-centered" datetime="2016-1-1">
        <p>When: ${new Date(event.date_time)}</p>\n
      </time>
    </section>
  </section>
  <footer class="card-footer">
    <a href="/home" class="card-footer-item has-text-centered" onclick=RSVPEvent(${event.id})}>
      RSVP
    </a>
    <a href="/updateEvent" class="card-footer-item has-text-centered" onClick="updateEvent(${event.id})">
      Update Event
    </a>
    <a href="/home" class="card-footer-item has-text-centered" onClick="removeEvent(${event.id})">
      Delete Event
    </a>
  </footer>
</section>
<br>
<br>
    `;
  });
  return events;
};

// i left off on update not completed
const updateEvent = (id) => {
  const button = document.getElementById('updateEvent');
  button.addEventListener('click', () => {
    window.location.href = '/updateEvent';
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = form.title.value;
      const dateTime = form.date_time.value;
      const purpose = form.purpose.value;
      const location = form.location.value;
      const description = form.description.value;
      const type = form.type.value;
      console.log(title, description, purpose, location, dateTime, type);

      const response = await requestMethod('POST', '/events/:id',
      {title, description, purpose, location,dateTime, type});
      window.location.href = '/home';
    });
  });
};

const removeEvent = (id) => {
  const response = requestMethod('DELETE', `/events/${id}`);
  window.location.reload();
};

window.addEventListener('load', () => {
  getEvents();
});
