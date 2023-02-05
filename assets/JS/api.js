
function createPost(){
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  
  fetch('http://localhost:3000/posts/', {
  method: 'POST',
  body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
  }),
  headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

document.addEventListener('DOMContentLoaded', function listPosts(){
    fetch('http://localhost:3000/posts/')
      .then((response) => response.json())
  		.then((json) =>{
						console.log(json);
						var output = "";
            json.forEach(function(post){
							output += `
							<div id="post">
								<h4 id="post-title">${post.title}</h4>
								<p id="post-body">${post.body}</p>
								<span class="options">
									<i class="fas fa-edit" onclick="scrollUp(${post.id})"></i>
									<i class="fas fa-trash-alt" onclick="deletePost(${post.id})"></i>
								</span>
							</div>
							`

							document.getElementById("posts").innerHTML = output;
              
            });
            
        });
			
});


function deletePost(id){
	fetch(`http://localhost:3000/posts/${id}`, {
  method: 'DELETE',
});
}

function editPost(id){
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: "me",
          body: "you",
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function scrollUp(id){

  document.getElementById('left').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  fetch(`http://localhost:3000/posts/${id}`)
  .then((response) => response.json())
  .then((json) => {console.log(json);
   
      document.getElementById("title").value = json.title;
      document.getElementById("body").value= json.body;
      document.getElementById("edit-button").style.display = "block";
      document.getElementById("edit-button").addEventListener("click", editPost(json.id));
  }

  );
  
}





