// sales.js

// Función para agregar un producto a la lista de productos
function addProduct(products, product) {
    products.push(product); // Agrega el producto al array de productos
  }
  
  // Función para calcular el total de los precios de todos los productos en la lista
  function calculateTotal(products) {
    // Usa reduce para sumar los precios de todos los productos
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Función para aplicar un descuento al total
  function applyDiscount(total, discount) {
    // Verifica que el descuento sea válido (entre 0 y 1)
    if (discount < 0 || discount > 1) {
      throw new Error('Descuento inválido');
    }
    // Calcula el total con el descuento aplicado
    return total * (1 - discount);
  }
  
  // Exporta las funciones para que puedan ser utilizadas en otros archivos
  module.exports = { addProduct, calculateTotal, applyDiscount };
  