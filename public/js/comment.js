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
		console.log("comment created");
    } else {
        alert('Failed to comment');
    }

};

document
  .querySelector('#button-addon2')
  .addEventListener('submit', newCommentHandler);