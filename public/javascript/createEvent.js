const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'content-type': 'application/json' } : {},
}).then((response) => {
  if (response.status >= 400) {
    return response.json().catch((errResData) => {
      const error = new Error('Something went wrong!');
      error.data = errResData;
      throw error;
    });
  }
  return response;
});

//still working on
const form = document.getElementById('createEvent');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const eventTitle = form.title.value;
  const eventDate = form.dateCreated.value;
  const purpose = form.purpose.value;
  const location = form.location.value;
  const eventDescription = form.description.value;
  const eventType = form.type.value;
  
  console.log(eventTitle,eventDate,purpose,location,eventDescription,eventType);
  console.log(document.cookie);
  const response = requestMethod('POST', '/events',
  {null,dateCreated, eventTitle, description, purpose, location,eventDescription,eventType});
  // window.location.href = '/home';
});