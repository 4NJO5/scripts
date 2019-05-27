axios.get('https://api.github.com/user/4NJO5')
    .then(function(response){
    console.log(response.data.avatar_url);
    })
    .catch(function(error){
    console.warn(error);
    });