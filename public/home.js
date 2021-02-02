
document.getElementById('Crear_Alumno').addEventListener("click", function(){
    axios.post('http://localhost:3000/api/student', { 
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
  

document.getElementById('listar_alumnos').addEventListener("click", function() {
    
    axios.get('http://localhost:3000/api/student',{
        
        headers: {
            token: localStorage.getItem('token')
        }
    })

    .then(response => {   
        response.data.forEach(student => {
            
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
        
        // response.data.forEach(student => {

        //     const name = student.name
        //     const lastname = student.lastname
        //     const email = student.email
        //     // console.log("Nombre: " +  student.name, "Apellidos: " + student.lastname, "Email: " + student.email )

        })
            
        

    
        // const listados = document.getElementById('listado_alumnos')
        //     response.data.forEach(lista => {
        // /   const newLista = document.createElement('li')
        // //  newLista.innerHTML = lista.email
        // //  listados.apenchild(newLista)
        // // });
        
    })

})

document.getElementById('buscar').addEventListener("click", function() {
    
    axios.get('http://localhost:3000/api/student',{
        email: document.getElementById('buscar').value,
       
        headers: {
            token: localStorage.getItem('token')
        }
    })

    .then(response => {   
        response.data.forEach(student => {
            
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
        
        // response.data.forEach(student => {

        //     const name = student.name
        //     const lastname = student.lastname
        //     const email = student.email
        //     // console.log("Nombre: " +  student.name, "Apellidos: " + student.lastname, "Email: " + student.email )

        })
            
        

    
        // const listados = document.getElementById('listado_alumnos')
        //     response.data.forEach(lista => {
        // /   const newLista = document.createElement('li')
        // //  newLista.innerHTML = lista.email
        // //  listados.apenchild(newLista)
        // // });
        
    })

})