

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
        document.getElementById("demo").innerHTML = "Contraseña o password incorrento."

    }
    
    })
    .catch(function (error) {
        document.getElementById("demo").innerHTML = "Contraseña o password incorrento."

    })
}) 

function home(){
    window.location = "http://localhost:3000/home.html"

}

// document.getElementById('students').addEventListener("click", function(){
//     axios.post('http://localhost:3000/api/students',{
//     email: document.getElementById('login_email').value,
//     password: document.getElementById('login_password').value

//     })
//     .then(function (response){
//         console.log(response)
//     })
//     .catch(function (error){
//         console.log(error)
//     })
// }) 

















