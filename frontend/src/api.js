function obtenerArticulos() {
    return fetch('http://18.217.23.211:3000/api/articulos')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

function GetArticulosByGenero(genero) {
    return fetch(`http://18.217.23.211:3000/api/articulos?gender=${genero}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export { obtenerArticulos, GetArticulosByGenero };