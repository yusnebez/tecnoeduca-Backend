document.getElementById('signup').addEventListener("click", function(){
    axios.post('http://localhost:3000/api/auth/signup',{
    name: document.getElementById('signup_name').value,
    email: document.getElementById('signup_email').value,
    password: document.getElementById('signup_password').value

    })
    .then(function (response){
        if(response.data && response.data.token)
        {localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('name', response.data.name)
        home()
    }else{

        
    }    })
    
    .catch(function (error){
        
    })
}) 


function home(){
    window.location = "http://127.0.0.1:5500/public/subject.html"

}