const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/api",
    timeout: 2000
})

document.getElementById('Crear_Alumno').addEventListener("click", function(){
    axios.post('/student', { 
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
    
    axios.get('/student',{
        
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
        
    })

}

/* .getElementById('buscar').addEventListener("click", function() 
{

    axios.get(`http://localhost:3000/api/student/buscar?email=${document.('buscar_email').value}`,
        
        {
            headers: {
                token: localStorage.getItem('token')
            }
        
        }
    
)
    .then(response => {   
        response.data.forEach(student => {
            console.log(response.data)
            const elementname = document.createElement('p')
            elementname.innerHTML = student.name
            elementname.setAttribute("class", "listado_alumnos")
            const parentname = document.getElementById('listado')
            parentname.appendChild(elementname)
            
            const elementlast = document.createElement('p')
            elementlast.innerHTML = student.lastname
            elementlast.setAttribute("class", "listado_alumnos")
            const parentlast = document.getElementById('listado')
            parentlast.appendChild(elementlast)

            const elementemail = document.createElement('p')
            elementemail.innerHTML = student.email
            elementemail.setAttribute("class", "listado_alumnos")
            const parentemail = document.getElementById('listado')
            parentemail.appendChild(elementemail)
        
    

        })
        
    })

}) */