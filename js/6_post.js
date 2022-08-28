function loadPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => displayPosts(data));
}

/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
 */

function displayPosts(posts) {
    const postDiv = document.getElementById('posts-container');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User-${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postDiv.appendChild(div);
    }
}
loadPosts();