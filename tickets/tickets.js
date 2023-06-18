let botonBorrar = document.getElementById("boton-borrar");
let botonResumen = document.getElementById("boton-resumen");
let inputs = document.querySelectorAll("input");
let categorias = document.getElementById("Categoria");
let cardEstudiante = document.getElementById("estudiante");
let cardTrainee = document.getElementById("trainee");
let cardJunior = document.getElementById("junior");


cardEstudiante.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="1";
    cardEstudiante.style.backgroundColor = "rgb(133, 193, 233)";
    promocion = 0.2;
})

cardTrainee.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="2";
    cardTrainee.style.backgroundColor = "rgb(88, 214, 141)";
    promocion = 0.5;
})

cardJunior.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="3";
    cardJunior.style.backgroundColor = "rgb(249, 231, 159)";
    promocion = 0.85;
})

categorias.addEventListener('click', ()=>{
    let valorCategorias = categorias.value;
    switch (valorCategorias) {
        case "1":
            cardEstudiante.style.backgroundColor = "rgb(133, 193, 233)";
            promocion = 0.2;
            break
        case "2":
            cardTrainee.style.backgroundColor = "rgb(88, 214, 141)";
            promocion = 0.5;
            break
        case "3":
            cardJunior.style.backgroundColor = "rgb(249, 231, 159)";
            promocion = 0.85;
            break
        default:
            promocion = 1;
            break
    }
})

botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
    document.getElementById('total').innerHTML = 'Total a Pagar: $ ';
});

function nombreComprador(nombre){
    compradorNombre = nombre;    
}

function apellidoComprador(apellido){
    compradorApellido = apellido;    
}

function correoComprador(correo){
    compradorCorreo = correo;    
}

function cantidadBoletos(valor){
    if(valor < 0){
        alert("La cantidad de boletos no puede ser nulo o menor a 0");
    }
    valor = parseInt(Math.round(valor));
    cantidad = valor;
}


botonResumen.addEventListener('click', ()=>{
    let vacio = 0;
    inputs.forEach( input =>{ if(input.value == ''){
        vacio++;
    }});
    if(vacio > 0){
        alert("Completa los campos vacios");
        document.getElementById('totales').innerHTML = 'Datos insuficientes para realizar la compra';
    }else{
        document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + 200 * promocion * cantidad; 
        document.getElementById('totales').innerHTML = `Nombre: ${compradorNombre} </br>
                                                        Apellido: ${compradorApellido} </br>
                                                        Correo: ${compradorCorreo} </br>
                                                        Tickets: ${cantidad} </br>Total a Pagar: $ ` + 200 * promocion * cantidad;
    }
});

function refrescarPagina(){
    location.reload();
}

