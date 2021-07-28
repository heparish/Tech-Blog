const newCommentHandler = async (event) => {
  console.log("click");
    event.preventDefault();

  const content = document.querySelector('#commentHole').value;
	const pIdent = document.querySelector('#pId').value;

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
			content,
        	pIdent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

    if (response.ok) {
		document.location.replace('/');
    } else {
        alert('Failed to comment');
    }

};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);