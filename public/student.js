const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/api",
    timeout: 2000
})

document.getElementById('Crear_Alumno').addEventListener("click", function(){
    api.post('/student', { 
        name: document.getElementById('student_name').value,
        email: document.getElementById('student_email').value,
        lastname: document.getElementById('student_lastname').value,
    }, 
    {
        headers: {
            token: localStorage.getItem('token')
        }

    })
    .then(function (response){
        console.log(response)

    })
    .catch(function (error) {
        console.error("Error al crear el alumno")

    })
}) 
  

window.onload = function() {
    
    api.get('/student',{
        
        headers: {
            token: localStorage.getItem('token')
        }
    })

    .then(response => {   
        const parentname=document.getElementById('listado')
        parentname.innerHTML = ``
        response.data.forEach(student => {
            
            parentname.innerHTML += ` <div class="row">
            <div class="col-10">${student.name} ${student.lastname} - ${student.email}
            </div> 
            <div class="col-1">nota
            </div> 
            <div class="col-1">eliminar
            </div> 

        </div>` 

        })
        reload ()
    })
    .catch(function (error) {
        console.error("Error al crear el alumno")

    })
}

function reload (){
    window.location.href = "../student.html"
}
