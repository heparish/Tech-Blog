// edit post handler
const editHandler = async (event) => {
	event.preventDefault();

	const pUpIdent = document.querySelector('#pUpId').textContent;
	const post_title = document.querySelector('#post_title').value;
	const content = document.querySelector('#content').value;
	
	const response = await fetch(`/api/post/${pUpIdent}`, {
		method: 'PUT',
		body: JSON.stringify({
		post_title,
		content,
		}),
		headers: {
		'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to update post');
	}
  
};

document
	.querySelector('.update-form')
	.addEventListener('submit', editHandler);