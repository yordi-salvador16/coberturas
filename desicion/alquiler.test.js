// rental.test.js

// Importa la función del archivo rental.js
const { rentMotorcycle } = require('./alquiler');

// Prueba para verificar que no se permite alquilar si el usuario es menor de 18 años
test('no permitir alquilar si es menor de 18 años', () => {
  expect(rentMotorcycle(17, true)).toBe('Debes tener al menos 18 años para alquilar una motocicleta.');
});

// Prueba para verificar que no se permite alquilar si el usuario no tiene una licencia válida
test('no permitir alquilar si no tiene una licencia válida', () => {
  expect(rentMotorcycle(18, false)).toBe('Debes tener una licencia de motocicleta válida para alquilar una motocicleta.');
});

// Prueba para verificar que se permite alquilar si el usuario tiene 18 años o más y tiene una licencia válida
test('permitir alquilar si tiene 18 años o más y tiene una licencia válida', () => {
  expect(rentMotorcycle(18, true)).toBe('Motocicleta alquilada con éxito.');
  expect(rentMotorcycle(21, true)).toBe('Motocicleta alquilada con éxito.');
});
