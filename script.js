const SHEET_ID = "1VgJOV-bXxjue36yOTnRCnbDhiZfH5ouHQc-jcuf4y7w";

const ACCESS_TOKEN =
  "ya29.a0AeTM1ieA2wsNeqNi7HW6pNUvggbrXVun8JW3uvCxHOkosDP6WK4zgDHIRlzuEhxOQjWIqsNjbkYFssTQJrq2MOAsvIwbsgjUjGgE723KYdIDMkLyuML0eIuVM3EBuD4gUp3eTpS25T9ZFH14bz-Uy_gpMbUMaCgYKAYESARMSFQHWtWOm0K0xQ3qoiDUPIW6g8nOOYg0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/menu!A2:D`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (let i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        //Ingredientes
        const itemIngredientes= document.createElement ("span");
        itemIngredientes.className= "item ingredientes";
        itemIngredientes.innerHTML= values [i][1];

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemIngredientes);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);

    }
    });

     
});
