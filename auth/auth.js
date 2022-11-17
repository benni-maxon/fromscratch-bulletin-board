import { signInUser, signUpUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signUpUser(email, data.get('password'));

    // if (user) {}
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const user = await signInUser(email, data.get('password'));

    // if (user) {};
});
