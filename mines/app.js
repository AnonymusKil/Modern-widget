console.error("error")
console.warn("enter")
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthName = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dynamic = document.getElementById("week")
const dynamic2 = document.getElementById("midfield")
function formatTime(time) {
    if (time < 10) {
      return `0${time}`;
    }else{
        return time;
    }
}
function modernWidget(params) {
    const today = new Date()
    const daysIndex = today.getDay()
    const dayName = daysOfTheWeek[daysIndex]
    const monthIndex = today.getMonth()
    const monthFad = monthName[monthIndex]
    const day = today.getDate()
    const hours = formatTime(today.getHours())
    const minutes = formatTime(today.getMinutes())
    const secs = formatTime(today.getSeconds())

   dynamic.innerHTML = `<p>${dayName}</p>
       <p>${day}</p>
        <p>${monthFad}</p>
   ` ;
  dynamic2.innerHTML = `<p>${hours}</p>:<p>${minutes}</p>:<p>${secs}</p> `
}
setInterval(modernWidget, 1000)
modernWidget()