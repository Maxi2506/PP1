//Funcion para buscar productos standar de datos.json
function GetVinos() {
    const xhr = new XMLHttpRequest();
    $lista = document.getElementById('listado');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');

            //Se parsea los datos de json y se guardan en productos
            let json = JSON.parse(xhr.responseText);
            let producto = json.vinos;
            console.log(producto);

            //Se itera el array de productos y se genera una card para cada uno
            producto.forEach(element => {
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
                    <p>$ ${element.precio}</p>
                    <div class="link">
                        <a href="#">Detalles</a>
                    </div>
                </div>
            </div>`;
            });
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
    })

    xhr.open("GET",'data/datos.json');
    xhr.send();
}
//Funcion para buscar productos premium de datos.json
function GetVinosPremium() {
    const xhr = new XMLHttpRequest();
    $lista = document.getElementById('VP');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');

            //Se parsea los datos de json y se guardan en productos
            let json = JSON.parse(xhr.responseText);
            
            let producto = json.vinos_premium;
            console.log(producto);

            //Se itera el array de productos y se genera una card para cada uno
            producto.forEach(element => {
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
                    <p>$ ${element.precio}</p>
                    <div class="link">
                        <a href="#">Detalles</a>
                    </div>
                </div>
            </div>`;
            });
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
    })
    xhr.open("GET",'data/datos.json');

    xhr.send();
}