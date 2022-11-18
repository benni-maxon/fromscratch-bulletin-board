const SUPABASE_URL = 'https://eqvhbypqmflvzwpuxohs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdmhieXBxbWZsdnp3cHV4b2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzAsImV4cCI6MTk4MzY4NDAzMH0.69mAZ8sZWHEPxgHYg8wvmHJc4GleoS6fqfGdJQOWGno';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const response = await client.from('posts').select('*');
    return response.data;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth');
}

export async function createPost(post) {
    const response = await client.from('posts').insert(post);

    return response.data;

}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}