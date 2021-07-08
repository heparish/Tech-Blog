const submitPost = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#postbody').value.trim();
    const title = document.querySelector('#title').value.trim();
    const user_id = window.location.pathname.split('/')[4];
    const url = `/api/post/new/${user_id}`;

    if (body && title) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({body, title}),
            headers: {
                'Content-Type': 'application/json',
            },  
        });

        if (response.ok) {
            document.location.replace(`/dashboard/${user_id}`);

        } else {
            alert('Failed to create post :( ')
        }
    }
    
};

document.querySelector('.create-post').addEventListener('submit',submitPost);