// edit post handler
const editHandler = async (event) => {
	event.preventDefault();

	const pUpIdent = document.querySelector('#pUpId').textContent;
	const title = document.querySelector('#title').value;
	const content = document.querySelector('#content').value;
	
	const response = await fetch(`/api/post/${pUpIdent}`, {
		method: 'PUT',
		body: JSON.stringify({
		title,
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