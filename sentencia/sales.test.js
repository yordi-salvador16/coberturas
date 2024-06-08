// sales.test.js

// Importa las funciones del archivo sales.js
const { addProduct, calculateTotal, applyDiscount } = require('./sales');

// Prueba para verificar que se agrega un producto a la lista
test('agregar un producto a la lista', () => {
  const products = []; // Inicializa una lista vacía de productos
  const product = { name: 'Producto 1', price: 10 }; // Crea un producto
  addProduct(products, product); // Agrega el producto a la lista
  expect(products).toContain(product); // Verifica que la lista contenga el producto
});

// Prueba para calcular el total de los productos en la lista
test('calcular el total de los productos', () => {
  const products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 20 }
  ]; // Lista de productos con sus precios
  expect(calculateTotal(products)).toBe(30); // Verifica que el total sea 30
});

// Prueba para aplicar correctamente un descuento
test('aplicar descuento correctamente', () => {
  const total = 100; // Total antes del descuento
  const discount = 0.1; // Descuento del 10%
  expect(applyDiscount(total, discount)).toBe(90); // Verifica que el total después del descuento sea 90
});

// Prueba para lanzar un error con descuento inválido
test('lanzar error con descuento inválido', () => {
  const total = 100; // Total antes del descuento
  expect(() => applyDiscount(total, -0.1)).toThrow('Descuento inválido'); // Descuento negativo, debe lanzar error
  expect(() => applyDiscount(total, 1.1)).toThrow('Descuento inválido'); // Descuento mayor a 1, debe lanzar error
});

