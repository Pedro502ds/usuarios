document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fetchDataBtn").addEventListener("click", fetchData);
});

function fetchData() {
    var entrada = document.getElementById("entrada").value;
    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = entrada;

    const url = `https://jsonplaceholder.typicode.com/users/${entrada}`;
    const resulDiv = document.getElementById("result");
    
    resulDiv.textContent = "Cargando Datos.....";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json(); 
    })
    .then(data => {
        resulDiv.textContent = JSON.stringify(data, null, 2); 
    })
    .catch(error => {
        resulDiv.textContent = `Error: ${error.message}`;
    });
}

