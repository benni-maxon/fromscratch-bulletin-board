import { checkAuth, createPost, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const home = document.getElementById('home');
const postItForm = document.getElementById('post-it-form');

logoutButton.addEventListener('click', () => {
    logout();
});

home.addEventListener('click', () => {
    location.replace('/');
});

postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    await createPost({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    location.replace('/');
});