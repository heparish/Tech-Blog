const editPost = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#postBody').value.trim();
    const title = document.querySelector('#title').value.trim();
    var post_id = window.location.pathname.split('/')[3];


    console.log(body)
    console.log(title)
    if (body && title) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({body, title, post_id}),
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Bummer we couldn`t get that to work, try again.')
        }
    }
    
}
 
document.querySelector('.edit-post').addEventListener('submit',editPost);
