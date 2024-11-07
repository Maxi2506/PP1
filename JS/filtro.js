const expresiones = {
    numeros: /^[0-9]+$/, 
}

/* función para filtrar datos del datos.json */
function BuscarProductosVP() {
    var desde = parseInt(document.getElementById('desde').value);//Parseamos a entero el valor tomado desde el input
    var hasta = parseInt(document.getElementById('hasta').value);//Ya que los valores que se toman por defecto son string
    var cat = document.getElementById('categoria').value;

    if (hasta == "") {
        hasta = 9999999999999 //En caso de que el usuario no cargue ningun valor declaramos el mayor numero posible
    }
    if (desde == "") {
        desde = 0 //En caso de que el usuario no cargue ningun valor declaramos el menor numero posible
    }

    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('VP');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');
            console.log('HOLA2',document.getElementById('desde').value,hasta);

            //Parseo el texto plano del JSON
            let json = JSON.parse(xhr.responseText);
            console.log(json.vinos_premium);
            $lista.innerHTML = ``;
 
            if (cat == "Blanco" || cat == "Rosado" || cat == "Tinto") {  
                
                //Se muestran los productos según categoria y precio seleccionado
                
                json.vinos_premium.forEach((element) => {
                    console.log('PRUEBA 2.0');
                
                    if (desde <= element.precio && hasta >= element.precio && element.tipo_de_vino == cat ) {
                        console.log(element.precio)
                        $lista.innerHTML += `
                        <div class="imagen">
                        <div class="face front">
                        <img src=${element.img} alt="">
                        <h3>${element.titulo}</h3>
                        </div>
                        <div class="face second">
                        <h3>${element.titulo}</h3>
                        <p>${element.tipo_de_vino}</p>
                        <p>${element.descripcion}</p>
                        <p>${element.precio}</p>
                        <div class="link">
                        <a href="#">Detalles</a>
                        </div>
                        </div>
                        </div>`;
                    } else {
                    }
                } )

            } else { 
                //En caso de que el usuario no coloque la categoria
                //El codigo va a imprimir todas las categorias disponibles
                json.vinos_premium.forEach((element) => {
                    console.log('PRUEBA 2.0');
                    if (desde <= element.precio && hasta >= element.precio) {
                        console.log(element.precio)
                        $lista.innerHTML += `
                        <div class="imagen">
                        <div class="face front">
                        <img src=${element.img} alt="">
                        <h3>${element.titulo}</h3>
                        </div>
                        <div class="face second">
                        <h3>${element.titulo}</h3>
                        <p>${element.tipo_de_vino}</p>
                        <p>${element.descripcion}</p>
                        <p>${element.precio}</p>
                        <div class="link">
                        <a href="#">Detalles</a>
                        </div>
                        </div>
                        </div>`;
                    } else {
                    } 
                });
            }
        } else {
            //Mensaje en caso de no conectarse a datos.json
            $lista.innerHTML = `
            <div class="tarjeta">
            <img src="" alt="">
            <h2>Error no se encontraron datos</h2>
            <p>${xhr.status}</p>
            <p>${xhr.statusText}</p>
            </div>`;
        }
    });

    xhr.open("GET", '../data/datos.json');

    xhr.send();
}
/* función para filtrar datos del datos.json */
function BuscarProductos() {
    var desde = parseInt(document.getElementById('desde').value);//Parseamos a entero el valor tomado desde el input
    var hasta = parseInt(document.getElementById('hasta').value);//Ya que los valores que se toman por defecto son string
    var cat = document.getElementById('categoria').value;

    if (hasta == "") {
        hasta = 9999999999999 //En caso de que el usuario no cargue ningun valor declaramos el mayor numero posible
    }
    if (desde == "") {
        desde = 0 //En caso de que el usuario no cargue ningun valor declaramos el menor numero posible
    }

    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');
            console.log('HOLA2',document.getElementById('desde').value,hasta);

            //Parseo el texto plano del JSON
            let json = JSON.parse(xhr.responseText);
            console.log(json.vinos);
            $lista.innerHTML = ``;
 
            //Se muestran los productos según categoria y precio seleccionado
            if (cat == "Blanco" || cat == "Rosado" || cat == "Tinto") { 
                
                json.vinos.forEach((element) => {
                    console.log('PRUEBA 2.0');
                    if (desde <= element.precio && hasta >= element.precio && element.tipo_de_vino == cat ) {
                        console.log(element.precio)
                        $lista.innerHTML += `
                        <div class="imagen">
                        <div class="face front">
                        <img src=${element.img} alt="">
                        <h3>${element.titulo}</h3>
                        </div>
                        <div class="face second">
                        <h3>${element.titulo}</h3>
                        <p>${element.tipo_de_vino}</p>
                        <p>${element.descripcion}</p>
                        <p>${element.precio}</p>
                        <div class="link">
                        <a href="#">Detalles</a>
                        </div>
                        </div>
                        </div>`;
                    } else {
                    }
                } )

            } else { 
                //En caso de que el usuario no coloque la categoria
                //El codigo va a imprimir todas las categorias disponibles
                json.vinos.forEach((element) => {
                    console.log('PRUEBA 2.0');
                    if (desde <= element.precio && hasta >= element.precio) {
                        console.log(element.precio)
                        $lista.innerHTML += `
                        <div class="imagen">
                        <div class="face front">
                        <img src=${element.img} alt="">
                        <h3>${element.titulo}</h3>
                        </div>
                        <div class="face second">
                        <h3>${element.titulo}</h3>
                        <p>${element.tipo_de_vino}</p>
                        <p>${element.descripcion}</p>
                        <p>${element.precio}</p>
                        <div class="link">
                        <a href="#">Detalles</a>
                        </div>
                        </div>
                        </div>`;
                    } else {
                    } 
                });
            }
        } else {
            //En caso de no conectarse al json, presenta mensaje de error
            $lista.innerHTML = `
            <div class="tarjeta">
            <img src="" alt="">
            <h2>Error no se encontraron datos</h2>
            <p>${xhr.status}</p>
            <p>${xhr.statusText}</p>
            </div>`;
        }
    });

    xhr.open("GET", '../data/datos.json');

    xhr.send();
}