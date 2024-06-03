function cargarDatos() {
    const url = 'https://rickandmortyapi.com/api/character';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red - La respuesta no fue ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
        })
        .catch(error => {
            console.error('Error capturado en .catch():', error);
        });
}

cargarDatos()

async function cargarDatosAsync() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la red - La respuesta no fue ok');
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);
    } catch (error) {
        console.error('Error capturado en try-catch:', error);
    }
}

cargarDatosAsync()