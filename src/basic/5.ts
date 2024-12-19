enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
console.log(isWeekend(DayOfWeek.Monday)); 
console.log(isWeekend(DayOfWeek.Tuesday)); 
console.log(isWeekend(DayOfWeek.Wednesday)); 
console.log(isWeekend(DayOfWeek.Thursday)); 
console.log(isWeekend(DayOfWeek.Friday)); 
console.log(isWeekend(DayOfWeek.Saturday)); 
console.log(isWeekend(DayOfWeek.Sunday));