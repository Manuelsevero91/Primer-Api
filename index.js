
async function fetchData() {
  try {
    //Solicitud a la api para obteenr datos//
    const response = await fetch('https://rickandmortyapi.com/api/character?page=3');
    //Convierte respuesta, obtenemos contenedor//
    const data = await response.json();
    const imagenContenedor = document.getElementById('imagenCaja');
    //Recorre los resultados//
    data.results.forEach(el => {

      const imageUrl = el.image;
      const imagenElement = document.createElement('p');
      imagenElement.innerHTML = `<img src="${imageUrl}" alt="${el.name}"> <br>${el.name}`;

      imagenContenedor.appendChild(imagenElement);

    });
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();
