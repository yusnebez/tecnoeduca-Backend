document.getElementById('login').addEventListener("click", function(){
    axios.post('http://localhost:3000/api/auth/login',{
    email: document.getElementById('login_email').value,
    password: document.getElementById('login_password').value

    })
    .then(function (response){
      if(response.data && response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('name', response.data.name)
        home()
    }else {
        alert(" No logeado")
    }
    
    })
    .catch(function (error) {
        alert(" No logeado")

    })
}) 

function home(){
    window.location = "http://127.0.0.1:5500/public/subject.html"

}