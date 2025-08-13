export function loadPostsFromStorage() {    
    let posts = window.localStorage.getItem('posts');
    posts = JSON.parse(posts);
    posts.forEach(post => post.created = new Date(post.created))
    return posts;
}

export function saveToLocaStorage(posts) {
 window.localStorage.setItem('posts', JSON.stringify(posts));
}

export function saveUserNameToStorage(name) {
    window.localStorage.setItem('username', name);
}

export function loadUserNameFromStorage() {
    return window.localStorage.getItem('username');
}