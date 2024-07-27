document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Implement login logic (e.g., verify credentials, set session)
    console.log('Logged in with:', email, password);
});

document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Implement registration logic (e.g., save user details)
    console.log('Registered with:', name, email, password);
});
