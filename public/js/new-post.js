const createPost = async (event) => {
    event.preventDefault();

    const heading = document.querySelector('input[name="post-heading"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    if (heading && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ heading, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post.');
        }
    }
}

document.querySelector('#new-post-form').addEventListener('submit', createPost);