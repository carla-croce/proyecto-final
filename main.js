let contenedor = document.getElementById("contenedor");

// fetch + DOM
const planes = async () => {
    const response = await fetch("../data.json");
    const data = await response.json();

    console.log(data);

// recorro el arreglo
    data.forEach((plan) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3>Plan de entrenamiento ${plan.plan}</h3>
        <p>Duración: ${plan.duracion}</p>
        <b>Precio: $${plan.precio}</b> 
        <button id="boton${plan.precio}">Agregar</button>
        <button id="btn${plan.precio}">Quitar</button> 
        <hr>  
        `;

        contenedor.append(div);

        let boton = document.getElementById(`boton${plan.precio}`);
            boton.addEventListener("click", (e) => {
            //  sweet alert
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `'Ha seleccionado plan de entrenamiento ${plan.plan}. Valor: $${plan.precio}'`,
                    showConfirmButton: true,
                    timer: 10000
                })
                 añadirAlCarrito(e.target.precio)
            });
 
    
        
        let btn = document.getElementById(`btn${plan.precio}`);
        btn.addEventListener("click", () => {
            localStorage.clear()
            alert("Ha seleccionado el botón 'Quitar'");
        });  

    });

         // traigo los botones del html con sus respectivas funciones

    

    // agrego el segundo arreglo y lo recorro
    data.forEach((plan) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3> Plan alimenticio ${plan.plan}</h3>
        <p>Duración: ${plan.duracion}</p>
        <b>Precio: $${plan.precio}</b> 
        <button id="agregar${plan.precio}">Agregar</button>
        <button id="quitar${plan.precio}">Quitar</button>   
        <hr>
        `;
       
        contenedor.append(div);
    
        // traigo los botones del html y les agrego funcionalidad
        let agregar = document.getElementById(`agregar${plan.precio}`);
        agregar.addEventListener("click", () => {
            //  sweet alert
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `'Ha seleccionado plan alimenticio ${plan.plan}. Valor: $${plan.precio}'`,
                showConfirmButton: true,
                timer: 10000
              })
        });
        
        let quitar = document.getElementById(`quitar${plan.precio}`);
        quitar.addEventListener("click", () => {
            localStorage.clear()
            alert("Ha seleccionado el botón 'Quitar'");
        });  
    });
    

};

planes();



const carrito = [];

function añadirAlCarrito(precio){
    let precioEncontrado = data.find( plan => plan.precio === parseInt(precio));
    
    carrito.push(precioEncontrado)
    console.log(carrito)
}