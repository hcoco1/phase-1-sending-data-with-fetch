const submitData = function(userName, userEmail){
  return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          name: userName,
          email: userEmail,
      }),
     
  }).then(function(response){
      return response.json();
  })
  .then(function(object){
      const id = object.id;
      const newElement = document.createElement('article');
      newElement.textContent = id;
      document.body.appendChild(newElement);

  })
  .catch(function(error){
      const message = document.createElement('article')
      message.textContent = error.message
      document.body.appendChild(message);

  })
}
submitData('ivan', 'arias.ivan@hotmail.com')
