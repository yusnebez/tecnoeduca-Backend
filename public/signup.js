const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/api",
    timeout: 2000
})

document.getElementById('signup').addEventListener("click", function(){
    api.post('/auth/signup',{
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
    } 
    })
    
    .catch(function (error){
        
    })
}) 


function home(){
    window.location.href = "../subject.html"

}