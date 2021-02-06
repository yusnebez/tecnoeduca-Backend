window.onload = function() {
    
    axios.get('http://localhost:3000/api/student',{
        
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

document.getElementById('buscar').addEventListener("click", function() 
{

    axios.get(`http://localhost:3000/api/student/buscar?email=${document.getElementById('buscar_email').value}`,
        
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

})