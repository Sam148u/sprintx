function obtenerArticulos() {
    return fetch('http://localhost:3000/api/articulos')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}



export { obtenerArticulos, GetArticulosByGenero };