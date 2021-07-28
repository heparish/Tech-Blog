const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const response = await fetch(`/api/gpost`, {
    	method: 'POST',
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
    	alert('Failed to crate post');
	}
	
};

  
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
