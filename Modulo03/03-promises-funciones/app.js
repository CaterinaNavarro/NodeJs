/* eslint-disable no-console */
const jugadoresContratados = [];

const contratarJugador = (jugador) => new Promise((resolve, reject) => {
  if (jugador === undefined) {
    reject(new Error('Debe igresar un jugador.'));
  }

  const { nombre, cantPartidosJugados } = jugador;

  if (nombre === undefined || nombre === '') {
    reject(new Error('Debe indicar el nombre del jugador'));
  }

  if (typeof (cantPartidosJugados) !== 'number' || !Number.isInteger(cantPartidosJugados) || cantPartidosJugados < 0) {
    reject(new Error('La cantidad de partidos debe ser un número entero mayor a 0.'));
  }

  if (cantPartidosJugados >= 20) resolve({ data: jugador, message: 'El jugador se incorpora al equipo' });

  reject(new Error('El jugador y el equipo no llegaron a un acuerdo'));
});

const agregarJugadorSeleccion = (data) => {
  const { jugador, message } = data;
  jugadoresContratados.push(jugador);
  console.log(message);
};

const messi = {
  nombre: 'messi',
  cantPartidosJugados: 500,
};

contratarJugador(messi)
  .then((res) => {
    agregarJugadorSeleccion(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
