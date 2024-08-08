function obtenerArticulos() {
    return fetch('http://3.15.230.254:3000/api/articulos')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}



export { obtenerArticulos, GetArticulosByGenero };