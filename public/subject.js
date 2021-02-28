const api = axios.create({
    baseURL:"https://tecnoeducate.herokuapp.com/",
    timeout: 2000
})


document.getElementById('subject').addEventListener("click", function(){
    axios.post('api/subject', { 
        name: document.getElementById('subject_name').value,
        
    }, 
    {
        headers: {
            token: localStorage.getItem('token')
        }

    })
    .then(function (response){
       alert("Asignatura creada")
       reload()


    })
    .catch(function (error) {
        


    })
}) 
  
function reload (){
    window.location.href = "../subject.html"
}



window.onload = function() {
    
    axios.get('api/subject/',{
        
        headers: {
            token: localStorage.getItem('token')
        }
    })

    .then(response => {   
            const parentname=document.getElementById('listado')
            parentname.innerHTML = ``
            response.data.forEach((subject,i) => { 
                let element = document.createElement('div')
                element.classList.add('row')
                element.innerHTML += `
                
                <div class="col-5"><a href="subjectstudents.html?subjectid=${subject._id}">${subject.name}</a></div>
                <div class="col-2"><button type="submit" class="btn btn-primary btn-lg float-right" id="eliminar${i}">Eliminar</button></div>
                <div class="col-3">
                <input placeholder="Nombre" type="text" class="form-control form-control-lg rounded-0" name="edit_subject_name" id="edit_subject_name${i}"/></div>
                <div class="col-2"><button type="submit" class="btn btn-primary btn-lg float-right" id="cambiar${i}">Modificar</button></div>`
                parentname.appendChild(element)  
                document.getElementById(`eliminar${i}`).addEventListener("click", function(){

                    axios.delete(`api/subject/${subject._id}`, {
                     headers: {
                        token: localStorage.getItem('token')
                    }            
                   })
                     .then(function (response){
                       window.location.reload()
                    })
                    .catch(function (error) {
                        console.error("Error")
                
                    })
                })
                
                 
                document.getElementById(`cambiar${i}`).addEventListener("click", function(){

                    axios.put(`api/subject/${subject._id}`, {
                    name: document.getElementById(`edit_subject_name${i}`).value
                    },
                    
                    {
                     headers: {
                        token: localStorage.getItem('token')
                    }            
                   })
                     .then(function (response){
                       window.location.reload()
                    })
                    .catch(function (error) {
                        console.error("Error al crear el alumno")
                
                    })
                })

            })
    })
    .catch(function (error) {
        console.error("Error al crear el alumno")

    })
}