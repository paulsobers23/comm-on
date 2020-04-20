const requestMethod = (method, url, data) => fetch(url, {
	method,
	body: JSON.stringify(data),
	headers: data ? {
		'content-type': 'application/json'
	} : {},
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

const form = document.getElementById('createEvent');

form.addEventListener('submit', async(e) => {
	e.preventDefault();
	const title = form.title.value;
	const date_time = form.date_time.value;
	const purpose = form.purpose.value;
	const location = form.location.value;
	const description = form.description.value;
	const type = form.type.value;
	const date_created = new Date().getTime;


	console.log(date_created, date_time, title, description, purpose, location, type);

	var creatorId;

	fetch('/events', {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((result) => {
			creatorId = result;
			console.log('Success:', result[0].creator);
		})
		.catch((error) => {
			console.error('Error:', error);
		});

	fetch('/events', {
			method: 'POST',
			body: { creator: creatorId,
					date_created,
					title,
					description,
					purpose,
					location,
					date_time,
					type},
      })
      .then((result) => {
	console.log('Success: Event created.', result);
})
.catch((error) => {
	console.error('Error:', error);
});

// window.location.href = '/home';

})