export function setStartOfTheDay (rightNow) {
  const today = new Date(rightNow);
  today.setHours(0,0,0,0);
  return today;
}

export function createDateString (dateSelected) {
  let monthNames = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiémbre', 'octubre', 'noviembre', 'diciembre'
  ];

  let dayNames = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  let day = dateSelected.getDay();
  let date = dateSelected.getDate();
  let month = dateSelected.getMonth();
  return `${dayNames[day]} ${date} de ${monthNames[month]}`;
}

export function createTimeString (dateSelected) {
  if (dateSelected.getHours() > 12) {
    return `${dateSelected.getHours() -12 }:${String(dateSelected.getMinutes()).padEnd(2,"0")} PM`;
  } else {
    return `${dateSelected.getHours()}:${String(dateSelected.getMinutes()).padEnd(2,"0")} AM`;
  }
}
