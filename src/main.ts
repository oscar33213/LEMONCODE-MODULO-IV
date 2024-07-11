type Clinica = {
  turno: number;
};

function crearClinica(): Clinica {
  return {
    turno: 0,
  };
}

function siguienteTurno(clinica: Clinica): void {
  clinica.turno++;
  mostrarTurno(clinica);
}

function anteriorTurno(clinica: Clinica): void {
  if (clinica.turno > 0) {
    clinica.turno--;
    mostrarTurno(clinica);
  }
}

function resetearTurno(clinica: Clinica): void {
  clinica.turno = 0;
  mostrarTurno(clinica);
}

function cambiarTurno(clinica: Clinica, valor: number): void {
  clinica.turno = valor;
  mostrarTurno(clinica);
}

function formatearTurno(turno: number): string {
  return turno.toString().padStart(2, "0");
}

function mostrarTurno(clinica: Clinica): void {
  console.log(`Turno actual: ${formatearTurno(clinica.turno)}`);
}

// Crear una instancia de la clínica
const clinica: Clinica = crearClinica();

// Función para simular la interfaz de usuario
function interfazUsuario(): void {
  console.log("--- Clínica ---");
  mostrarTurno(clinica);
}

// Manejador de evento para el botón Siguiente
document.getElementById("siguiente")?.addEventListener("click", function () {
  siguienteTurno(clinica);
});

// Manejador de evento para el botón Anterior
document.getElementById("anterior")?.addEventListener("click", function () {
  anteriorTurno(clinica);
});

// Ciclo principal del programa
interfazUsuario();
