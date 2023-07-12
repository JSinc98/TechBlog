const comment1 = document.querySelector('#comment');

const createComment = async (event) => {
    event.preventDefault();
    let comment = comment1.value.trim();
    let post_id = document.querySelector('.comment-post-id');
    await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id}),
        headers: { 'Content-Type': 'application/json' },
    });
    
    document.location.reload();
};

document.querySelector('#comment-button').addEventListener('click', createComment);