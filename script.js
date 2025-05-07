document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('username').value.trim();
    const content = document.getElementById('content').value.trim();
    const imageUrl = document.getElementById('imageUrl').value.trim();
  
    if (name && content) {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const user = document.createElement('h3');
      user.textContent = name;
  
      const text = document.createElement('p');
      text.textContent = content;
  
      postDiv.appendChild(user);
      postDiv.appendChild(text);
      
      if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Imagen del comentario";
        img.style.maxWidth = "100%";
        img.style.marginTop = "10px";
        img.style.borderRadius = "8px";
        postDiv.appendChild(img);
      }
      
  

      document.getElementById('posts').prepend(postDiv);
  
      // limpiar el formulario
      document.getElementById('username').value = '';
      document.getElementById('content').value = '';
      document.getElementById('imageUrl').value = '';

    }
  });
  