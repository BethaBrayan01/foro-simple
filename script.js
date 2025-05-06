document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('username').value.trim();
    const content = document.getElementById('content').value.trim();
  
    if (name && content) {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const user = document.createElement('h3');
      user.textContent = name;
  
      const text = document.createElement('p');
      text.textContent = content;
  
      postDiv.appendChild(user);
      postDiv.appendChild(text);
  
      document.getElementById('posts').prepend(postDiv);
  
      // limpiar el formulario
      document.getElementById('username').value = '';
      document.getElementById('content').value = '';
    }
  });
  