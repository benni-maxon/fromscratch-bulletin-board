/* Imports */

import { getPosts } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js';

/* Get DOM Elements */
const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');
/* State */

/* Events */
window.addEventListener('load', async () => {
    // console.log(getPosts());
    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
