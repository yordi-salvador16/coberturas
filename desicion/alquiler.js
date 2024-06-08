// rental.js

// Función para alquilar una motocicleta
function rentMotorcycle(age, hasLicense) {
    // Verifica si el usuario es menor de 18 años
    if (age < 18) {
      return 'Debes tener al menos 18 años para alquilar una motocicleta.';
    }
    // Verifica si el usuario tiene una licencia válida
    if (!hasLicense) {
      return 'Debes tener una licencia de motocicleta válida para alquilar una motocicleta.';
    }
    // Si cumple con ambos requisitos, permite el alquiler
    return 'Motocicleta alquilada con éxito.';
  }
  
  // Exporta la función para que pueda ser utilizada en otros archivos
  module.exports = { rentMotorcycle };
  