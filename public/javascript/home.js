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
            <button onClick="updateEvent(${event.id})" id ="updateEvent" class="card-footer-item">Update Button</button>
            <button onClick="removeEvent(${event.id})">Delete Event</button>
        </footer>
      </section>`;
  });
  return events
}

// i left off on update not completed
const updateEvent = (id) => {
  const button = document.getElementById('updateEvent');
  button.addEventListener('click', () =>{
    window.location.href = '/updateEvent' ;
    form.addEventListener('submit', async(e) => {
      e.preventDefault();
      const title = form.title.value;
      const dateCreated = form.dateCreated.value;
      const purpose = form.purpose.value;
      const location = form.location.value;
      const description = form.description.value;
      const type = form.type.value;
      
      const request = await requestMethod('GET', '/events');
      const data = await request.json();
      console.log(data);
      const creatorId = data.creator;
      console.log(creatorId);
      
      const response = requestMethod('POST', '/events/:id',
      {creatorId,dateCreated,title, description, purpose, location,type});
      // window.location.href = '/home';
      
    });
  })
  
}

const removeEvent = (id) => {
  const response = requestMethod('DELETE', `/events/${id}`);
  window.location.reload();
};

window.addEventListener('load', () =>{
  getEvents()
})