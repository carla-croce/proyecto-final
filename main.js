// let contenedor = document.getElementById("contenedor");

// // fetch + DOM
// const planes = async () => {
//     const response = await fetch("../data.json");
//     const data = await response.json();

//     console.log(data);

// // recorro el arreglo
//     data.forEach((plan) => {
//         let div = document.createElement("div");
//         div.innerHTML = `
//         <h3>Plan de entrenamiento ${plan.plan}</h3>
//         <p>Duración: ${plan.duracion}</p>
//         <b>Precio: $${plan.precio}</b> 
//         <button id="boton${plan.precio}">Agregar</button>
//         <button id="btn${plan.precio}">Quitar</button> 
//         <hr>  
//         `;

//         contenedor.append(div);

//         let boton = document.getElementById(`boton${plan.precio}`);
//             boton.addEventListener("click", () => {
//             //  sweet alert
//                 Swal.fire({
//                     position: 'top-center',
//                     icon: 'success',
//                     title: `'Ha seleccionado plan de entrenamiento ${plan.plan}. Valor: $${plan.precio}'`,
//                     showConfirmButton: true,
//                     timer: 10000
//                 })
//                  añadirAlCarrito(e.target.precio)
//             });
 
    
        
//         let btn = document.getElementById(`btn${plan.precio}`);
//         btn.addEventListener("click", () => {
//             localStorage.clear()
//             alert("Ha seleccionado el botón 'Quitar'");
//         });  

//     });

//          // traigo los botones del html con sus respectivas funciones

    

//     // agrego el segundo arreglo y lo recorro
//     data.forEach((plan) => {
//         let div = document.createElement("div");
//         div.innerHTML = `
//         <h3> Plan alimenticio ${plan.plan}</h3>
//         <p>Duración: ${plan.duracion}</p>
//         <b>Precio: $${plan.precio}</b> 
//         <button id="agregar${plan.precio}">Agregar</button>
//         <button id="quitar${plan.precio}">Quitar</button>   
//         <hr>
//         `;
       
//         contenedor.append(div);
    
//         // traigo los botones del html y les agrego funcionalidad
//         let agregar = document.getElementById(`agregar${plan.precio}`);
//         agregar.addEventListener("click", () => {
//             //  sweet alert
//             Swal.fire({
//                 position: 'top-center',
//                 icon: 'success',
//                 title: `'Ha seleccionado plan alimenticio ${plan.plan}. Valor: $${plan.precio}'`,
//                 showConfirmButton: true,
//                 timer: 10000
//               })
//               añadirAlCarrito(e.target.precio)
//         });
        
//         let quitar = document.getElementById(`quitar${plan.precio}`);
//         quitar.addEventListener("click", () => {
//             localStorage.clear()
//             alert("Ha seleccionado el botón 'Quitar'");
//         });  
//     });
    

// };

// planes();



// const carrito = [];

// function añadirAlCarrito(precio){
//     let precioEncontrado = data.find( data => data.precio === parseInt(precio));
    
//     carrito.push(precioEncontrado)
//     console.log(precioEncontrado);
//     console.log(carrito)
// }

// let contenedor = document.getElementById("contenedor");
// // fetch + DOM
// const planes = async () => {
//     const response = await fetch("../data.json");
//     const data = await response.json();

//     // definir la función para añadir productos al carrito
//     function añadirAlCarrito(precio) {
//         // buscar el producto seleccionado en el arreglo de datos
//         let productoEncontrado = data.find(plan => plan.precio === parseInt(precio));

//         // añadir el producto al carrito
//         carrito.push(productoEncontrado);

//         // actualizar el total en la página
//         document.getElementById('total').innerHTML = `Total: $${calcularTotal(carrito)}`;
//     }

//     // definir la función para calcular el total del carrito
//     function calcularTotal(carrito) {
//         let total = 0;
//         carrito.forEach((producto) => {
//             total += producto.precio;
//         });
//         return total;
//     }

//     // definir el arreglo de carrito dentro de la función planes
//     const carrito = [];

//     // recorrer el arreglo de datos y crear los elementos en la página
//     data.forEach((plan) => {
//         // crear el elemento div
//         let div = document.createElement("div");
//         div.innerHTML = `
//         <h3>Plan de entrenamiento ${plan.plan}</h3>
//         <p>Duración: ${plan.duracion}</p>
//         <b>Precio: $${plan.precio}</b> 
//         <button id="boton${plan.precio}">Agregar</button>
//         <button id="btn${plan.precio}">Quitar</button> 
//         <hr>  
//       `;

//         // añadir el div al contenedor en la página
//         contenedor.append(div);

//         // buscar los botones por su id y agregarles funcionalidad
//         let boton = document.getElementById(`boton${plan.precio}`);
//         boton.addEventListener("click", (e) => {
//             // mostrar el mensaje de éxito
//             Swal.fire({
//                 position: 'top-center',
//                 icon: 'success',
//                 title: `'Ha seleccionado plan de entrenamiento ${plan.plan}. Valor: $${plan.precio}'`,
//                 showConfirmButton: true,
//                 timer: 10000
//             });

//             // añadir el producto al carrito
//             añadirAlCarrito(e.target.id.replace('boton', ''));
//         });

//         let btn = document.getElementById(`btn${plan.precio}`);
//         btn.addEventListener("click", () => {
//             // mostrar el mensaje de éxito
//             Swal.fire({
//                 position: 'top-center',
//                 icon: 'success',
//                 title: `'Ha seleccionado el botón 'Quitar''`,
//                 showConfirmButton: true,
//                 timer: 10000
//             });

//             // vaciar el carrito
//             carrito.length = 0;

//             // actualizar el total en la página
//             document.getElementById('total').innerHTML = `Total: $${calcularTotal(carrito)}`;
//         });
//         });
//         };
//         // llamar a la función planes para que se ejecute
// planes();

let contenedor = document.getElementById("contenedor");

const planes = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();

  const carrito = [];

  function añadirAlCarrito(precio) {
    let productoEncontrado = data.find(plan => plan.precio === parseInt(precio));
    carrito.push(productoEncontrado);
    document.getElementById('total').innerHTML = `Total: $${calcularTotal(carrito)}`;
  }

  function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  }

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
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: `'Ha seleccionado plan de entrenamiento ${plan.plan}. Valor: $${plan.precio}'`,
        showConfirmButton: true,
        timer: 10000
      });

      añadirAlCarrito(e.target.id.replace('boton', ''));
    });

    let btn = document.getElementById(`btn${plan.precio}`);
    btn.addEventListener("click", (e) => {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: `'Ha seleccionado el botón 'Quitar''`,
        showConfirmButton: true,
        timer: 10000
      });

      eliminarDelCarrito(carrito, e.target.id.replace('btn', ''));
    });
  });

  function eliminarDelCarrito(carrito, precio) {
    let productoEncontrado = carrito.find(plan => plan.precio === parseInt(precio));
    let index = carrito.indexOf(productoEncontrado);
    if (index > -1) {
      carrito.splice(index, 1);
      document.getElementById('total').innerHTML = `Total: $${calcularTotal(carrito)}`;
    }
  }

  
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

        let agregar = document.getElementById(`agregar${plan.precio}`);
        agregar.addEventListener("click", (e) => {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `'Ha seleccionado plan alimenticio ${plan.plan}. Valor: $${plan.precio}'`,
            showConfirmButton: true,
            timer: 10000
          });
    
          añadirAlCarrito(e.target.id.replace('agregar', ''));
        });
    
        let quitar = document.getElementById(`quitar${plan.precio}`);
        quitar.addEventListener("click", (e) => {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `'Ha seleccionado el botón 'Quitar''`,
            showConfirmButton: true,
            timer: 10000
          });
    
          eliminarDelCarrito(carrito, e.target.id.replace('quitar', ''));
        });
      });
    
      function eliminarDelCarrito(carrito, precio) {
        let productoEncontrado = carrito.find(plan => plan.precio === parseInt(precio));
        let index = carrito.indexOf(productoEncontrado);
        if (index > -1) {
          carrito.splice(index, 1);
          document.getElementById('total').innerHTML = `Total: $${calcularTotal(carrito)}`;
        }
      }
    

}

planes();