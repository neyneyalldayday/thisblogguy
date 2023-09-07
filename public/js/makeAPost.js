const newPost = async function(e){
    e.preventDefault()
    const titleEl = document.querySelector(`input[name="postTitle"]`)
    const bodyEl = document.querySelector(`textarea[name="post-body"]`)
    await fetch(`/api/post`,{
        method: "POST",
        body: JSON.stringify({
            title: titleEl.value.trim(),
            body: bodyEl.value.trim(),
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    document.location.replace('/dashboard');

}

document.querySelector("#new-post").addEventListener("submit", newPost)