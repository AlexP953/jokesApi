// Ejemplo de API simple
async function getData() {
    try {
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json'
            }
        });
        if (response) {
            const jsonResponse = await response.json();
            document.getElementById('joke').innerHTML = jsonResponse.joke;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getWeather() {
    try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019');
        if (response) {
            const jsonResponse = await response.json();
            const today = jsonResponse.fecha;
            const weather = jsonResponse.stateSky.description.toLowerCase();
            const temperature = jsonResponse.temperatura_actual;
            const tiempo = `Avui, ${today} el temps serà ${weather} amb ${temperature}º`;
            document.getElementById('tiempo').innerHTML = tiempo;
        }
    } catch (error) {
        console.log(error);
    }
}