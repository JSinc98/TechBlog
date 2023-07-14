const createpost = async function(event) {
    event.preventDefault();
    const title1 = document.querySelector('#title');
    const content1 = document.querySelector('#content');

    let title = title1.value.trim()
    let content = content1.value.trim()
    console.log(title)
    console.log(content)
    await fetch('/api/post/'), {
        method: 'POST',
        body: JSON.stringify({ title, content}),
        headers: { 'Content-Type': 'application.json' },
    };

    document.location.replace('/homepage');
};

document.querySelector('#createpostbutton').addEventListener('click', createpost);