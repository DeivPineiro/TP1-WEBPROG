const elementBtnBuscar = document.getElementById('btnBuscar');
const elementLblCiudad = document.getElementById('lblCiudad');
const elementoCiudad = document.getElementById('divCiudad');
const elementoUCiudad = document.getElementById('divUCiudad');

const MI_API = "0d6be0e34e898404c5c17af8fc5f3445";
const MI_API_TOM = "gfSbuZeImTxGgfOGnqVsj5LzzZEZ7S00";



// *FUNCIÓN PRINCIPAL*

buscarCiudad = () => {
   

    elementoCiudad.innerHTML = `<div class="container text-center" role="status">
<h2 class="h4">Cargando, espera un poco!</h2>
</div>`;

//Llamada a la API CLIMA
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elementLblCiudad.value}&appid=${MI_API}&lang=es`)
        .then((resp) => {

            console.log(resp);
            elementoCiudad.innerHTML = `<p>${resp.json}</p>`;
            return resp.json();

        })
        .then(function (json) {
            console.log(json);

            var centigrados = (json.main.temp - 273.15);
            var cent_max = (json.main.temp_max - 273.15);
            var cent_min = (json.main.temp_min - 273.15);
            var backimg

//LLAMADA API MAPA

            var mapa = `https://api.tomtom.com/map/1/staticimage?key=gfSbuZeImTxGgfOGnqVsj5LzzZEZ7S00&zoom=9&center=${json.coord.lon},${json.coord.lat}&format=jpg&layer=basic&style=main&width=1000&height=200&view=Unified&language=en-GB`;
     

//SWITCH FONDO SEGUN CLIMA            
            switch (json.weather[0].icon) {

                case "01d":
                    backimg = "https://static5.depositphotos.com/1020804/534/i/450/depositphotos_5348287-stock-photo-bly-sunny-sky-with-small.jpg"
                    break;

                case "01n":
                    backimg = "https://live.staticflickr.com/4303/35495513243_66a5d3c62d_b.jpg"
                    break;

                case "02d":
                    backimg = "https://news.agrofystatic.com/nubes_y_nubes_1.jpg?d=620x375"
                    break;

                case "02n":
                    backimg = "https://static.vecteezy.com/system/resources/previews/007/551/390/non_2x/moonlight-and-cloudy-night-scary-free-photo.jpg"
                    break;

                case "03d":
                    backimg = "https://upload.wikimedia.org/wikipedia/commons/5/50/Cielo_Nublado.jpg"
                    break;

                case "03n":
                    backimg = "https://media.istockphoto.com/id/1329765839/es/vídeo/tormenta-eléctrica.jpg?b=1&s=640x640&k=20&c=55LKUoyh-xtzMJRMwnqjlHjDOU_thgHVPf3MR5DDuXc="
                    break;

                case "04d":
                    backimg = "https://upload.wikimedia.org/wikipedia/commons/5/50/Cielo_Nublado.jpg"
                    break;

                case "04n":
                    backimg = "https://media.istockphoto.com/id/1329765839/es/vídeo/tormenta-eléctrica.jpg?b=1&s=640x640&k=20&c=55LKUoyh-xtzMJRMwnqjlHjDOU_thgHVPf3MR5DDuXc="
                    break;

                case "09d":
                    backimg = "https://www.cuatromedios.com.ar/asset/thumbnail,992,558,center,center/media/cuatromedios/images/2019/11/04/2019110410491485674.jpg"
                    break;

                case "09n":
                    backimg = "https://www.cuatromedios.com.ar/asset/thumbnail,992,558,center,center/media/cuatromedios/images/2019/11/04/2019110410491485674.jpg"
                    break;

                case "10d":
                    backimg = "https://www.cuatromedios.com.ar/asset/thumbnail,992,558,center,center/media/cuatromedios/images/2019/11/04/2019110410491485674.jpg"
                    break;

                case "10n":
                    backimg = "https://www.cuatromedios.com.ar/asset/thumbnail,992,558,center,center/media/cuatromedios/images/2019/11/04/2019110410491485674.jpg"
                    break;

                case "11d":
                    backimg = "https://upload.wikimedia.org/wikipedia/commons/1/1e/Cloud_to_cloud_lightning_strike.jpg"
                    break;

                case "11n":
                    backimg = "https://upload.wikimedia.org/wikipedia/commons/1/1e/Cloud_to_cloud_lightning_strike.jpg"
                    break;

                case "13d":
                    backimg = "https://static.nationalgeographic.es/files/styles/image_3200/public/gettyimages-1241028054.jpg?w=1900&h=1267"
                    break;

                case "13n":
                    backimg = "https://static.nationalgeographic.es/files/styles/image_3200/public/gettyimages-1241028054.jpg?w=1900&h=1267"
                    break;

                case "50d":
                    backimg = "https://services.meteored.com/img/article/tipos-y-nombres-de-nieblas-293051-2_1024.jpg"
                    break;

                case "50n":
                    backimg = "https://services.meteored.com/img/article/tipos-y-nombres-de-nieblas-293051-2_1024.jpg"
                    break;



                default:
                    break;
            }

            elementoCiudad.innerHTML = `
            
            <div style="background-image: url(${backimg}); background-repeat: no-repeat; background-size: cover;" class="text-center mt-5 row m-auto border border-warning rounded">
            <div class = "col-lg-5 m-auto p-2">
            <img class = "c2 border shadow rounded imf-fluid" src="https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" alt="Icono del clima">
            </div>
            <div  class=" container col-lg-5 pt-5">

            <ul class = "c1 border shadow rounded p-5">

            <li>Lugar: ${json.name}</li>
            <li>Clima : ${json.weather[0].description}</li>
            <li>Temperatura : ${centigrados.toFixed(1)} C</li>
            <li>Temperatura maxima : ${cent_max.toFixed(1)} C</li>
            <li>Temperatura minima : ${cent_min.toFixed(1)} C</li>
            <li>Humedad : ${json.main.humidity} %</li>
            <li>Presión : ${json.main.pressure} hPa </li>
            <li>Velocidad del viento : ${json.wind.speed} Km/h </li>

            </ul>
          
            </div>

            <div class = "col-lg-12 p-5">
           
            <img class = "m-auto img-fluid col-lg-12 col-s-12  rounded border border-warning" src="${mapa}" alt="Mapa">
          
            </div>

            </div>
          
            `;
            clima = json.weather[0].main;

            return json;

        })

        .catch(err => { console.log(`Error.... ${err}`) })

        .finally(final => {

// LIMPIO Y SETEO EL LOCALSTORAGE

            localStorage.clear(); 
            localStorage.setItem("Ciudad",elementLblCiudad.value);     
            
        })


}

//MUESTRO LOCALSTORAGE

var uCiudad = localStorage.getItem("Ciudad");
elementoUCiudad.innerHTML = `<p class = "container p-3 m-auto text-center">Última ciudad visitada: ${uCiudad}. </p>`;
elementBtnBuscar.addEventListener('click', buscarCiudad);


