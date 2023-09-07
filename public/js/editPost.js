const clickedPost = document.querySelector("input[name='post-id']").value;
const editPost = async function(event){
    event.preventDefault()
    const titleEl = document.querySelector("input[name='edit-post-title']").value;
    const bodyEl = document.querySelector("textarea[name='edit-post-body']").value;
    await fetch(`/api/post/${clickedPost}`, {
        method: "PUT",
        body: JSON.stringify({
            titleEl, 
            bodyEl
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    document.location.replace("/dashboard")
}

const deletePost = async function(){
    await fetch(`/api/post/${clickedPost}`,{
        method: "DELETE"
    });
    document.location.replace("/dashboard")
}

document.querySelector("#edit-post").addEventListener("submit", editPost)
document.querySelector("#delete").addEventListener("click", deletePost)
