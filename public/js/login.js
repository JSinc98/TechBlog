const login = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else{
            alert('failed to login');
        };
      };
    };
    document.querySelector('#login-btn').addEventListener('click', login);