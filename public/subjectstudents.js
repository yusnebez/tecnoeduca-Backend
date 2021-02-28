const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/api",
    timeout: 2000
})

window.onload = function() {
    
    
    
    api.get('/student/',{
        
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
        reload()
    })
    .catch(function (error) {
        console.error("Error al crear el alumno")

    })

}

document.getElementById('buscar').addEventListener("click", function() 
{

    api.get(`/api/student/buscar?email=${document.getElementById('buscar_email').value}`,
        
        {
            headers: {
                token: localStorage.getItem('token')
            }
        
        }
    
)
    .then(response => {   
        response.data.forEach(student => {
            console.log(response.data)
            // const elementname = document.createElement('p')
            // elementname.innerHTML = student.name
            // elementname.setAttribute("class", "listado_alumnos")
            // const parentname = document.getElementById('listado')
            // parentname.appendChild(elementname)
            
            // const elementlast = document.createElement('p')
            // elementlast.innerHTML = student.lastname
            // elementlast.setAttribute("class", "listado_alumnos")
            // const parentlast = document.getElementById('listado')
            // parentlast.appendChild(elementlast)

            // const elementemail = document.createElement('p')
            // elementemail.innerHTML = student.email
            // elementemail.setAttribute("class", "listado_alumnos")
            // const parentemail = document.getElementById('listado')
            // parentemail.appendChild(elementemail)
        
    

        })
        
    })
    .catch(function (error) {
        console.error("Error al crear el alumno")

    })

})