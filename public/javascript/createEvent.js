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

form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const title = form.title.value;
  const dateCreated = form.dateCreated.value;
  const purpose = form.purpose.value;
  const location = form.location.value;
  const description = form.description.value;
  const type = form.type.value;
  console.log(dateCreated,title, description, purpose, location,type)
  
  const request = await requestMethod('GET', '/events');
  const data = await request.json();
  console.log(data)
  const creatorId = data.creator
  
  console.log(creatorId)
  
  const response = requestMethod('POST', '/events',
  {creatorId,dateCreated,title, description, purpose, location,type});
  window.location.href = '/home';
});