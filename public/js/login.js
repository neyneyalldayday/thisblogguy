const loginForm = async function(event) {
    event.preventDefault();
    console.log("hello")

    const usernameEl = document.querySelector('#username-login');
    const passwordEl = document.querySelector('#password-login');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    console.log(response)
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#loginForm')
    .addEventListener('submit', loginForm);