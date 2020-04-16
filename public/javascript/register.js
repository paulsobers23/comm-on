const registerForm = document.getElementById('registerForm');

registerForm.addEventListner('submit', e => {
  e.preventDefault();

  const firstName = registerForm.firstName.value;
  const lastName = registerForm.lastName.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  })
    .then(res => {
      if (res.status === 201) {
        window.location.replace('/login');
      }
    })
    .catch(err => {
      window.setTimeout(() => {
        window.location.reload();
      }, 4 * 1000);
    });
});
