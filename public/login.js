const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/api",
    timeout: 2000
})

document.getElementById('login').addEventListener("click", function(){
    axios.post('/auth/login',{
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
    window.location.href = "../subject.html"

}