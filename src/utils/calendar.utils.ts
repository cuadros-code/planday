
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const DATE_OBJ = new Date();

export const currentYear = DATE_OBJ.getFullYear();
export const currentMonth = DATE_OBJ.getMonth();
export const currentDayMonth = DATE_OBJ.getDate();

export const numberDaysByMonth = () => {
  return new Date(currentYear, currentMonth + 1, 0).getDate()
}

export const daysCurrentMonth = () => {
  return Array(numberDaysByMonth()).fill(null).map((_, i) => i + 1)
}

export const weekDay = (day: number) => {
  return new Date(currentYear, currentMonth, day).toLocaleDateString('en', { weekday: 'long' })
}

export const currentDayID = `${currentDayMonth}-${currentMonth}-${currentYear}`

export const dayInfo = () => {
  return daysCurrentMonth().map( day => {
    return {
      day,
      id: `${day}-${currentMonth}-${currentYear}`,
      isCurrentDate: day == currentDayMonth,
      label: weekDay(day),
      monthIndex: currentMonth,
      monthLabel: MONTHS[currentMonth],
      year: currentYear,
    }
  })
}