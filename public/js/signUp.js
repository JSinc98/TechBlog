const signup = async (event) => {
    console.log('click')
    
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response) {
          document.location.replace('/dashboard');
        } else {
          alert('Could not sign up, please try again');
        }
      }
};

document.querySelector('#signup-btn').addEventListener('click', signup);