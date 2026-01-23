
const months = ['January',' February',' March',' April',' May',' June',' July',' August',' September',' October',' November','December']

const DATE_OBJ = new Date();

const currentYear = DATE_OBJ.getFullYear();
const currentMonth = DATE_OBJ.getMonth();
const currentDayMonth = DATE_OBJ.getUTCDate();

export const numberDaysByMonth = () => {
  return new Date(currentYear, currentMonth + 1, 0).getDate()
}

export const daysCurrentMonth = () => {
  return Array(numberDaysByMonth()).fill(null).map((_, i) => i + 1)
}

export const weekDay = (day: number) => {
  return new Date(currentYear, currentMonth, day).toLocaleDateString('es', { weekday: 'long' })
}

export const dayInfo = () => {
  return daysCurrentMonth().map( day => {
    return {
      year: currentYear,
      monthIndex: currentMonth,
      monthLabel: months[currentMonth],
      isCurrentDate: day == currentDayMonth,
      day,
      label: weekDay(day)
    }
  })
}