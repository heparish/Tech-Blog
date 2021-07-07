const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#commentHole').value;
	const bpIdent = document.querySelector('#bpId').textContent;

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
			content,
        	bpIdent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

    if (response.ok) {
		document.location.replace('/');
    } else {
        alert('Failed to create comment');
    }

};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);