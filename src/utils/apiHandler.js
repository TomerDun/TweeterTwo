import { API_KEY } from "../secrets";

const url = `https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=${API_KEY}`


export async function fetchPosts(verbose = true) {
    const res = await fetch(url);
    if (verbose) console.log('Res return status code: ', res.status);
    if (!res.ok) {
        if (verbose) console.error('Response error: ', res);
        throw Error('Could not fetch posts data, status code: ', res.status)
    }
    const data = await res.json();

    console.log('--Succesfully retrieved posts from server--');

    // Format time data
    data.forEach(post => post.date = new Date(post.date));

    return data;
}

export async function addPostToServer(post, verbose = true) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (verbose) console.log('--Res return status code: ', res.status);
    if (!res.ok) {
        if (verbose) console.error('Response error: ', res);
        throw Error('Could not Add new post to server, status code: ', res.status)
    }

    console.log('--Succesfully added post to server--');
}