let monthNames = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiémbre', 'octubre', 'noviembre', 'diciembre'
];

let dayNames = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
];

let today = new Date();

let day = today.getDay();
let date = today.getDate();
let month = today.getMonth();

export default function createDateString () {
  return `${dayNames[day]} ${date} de ${monthNames[month]}`;
}
