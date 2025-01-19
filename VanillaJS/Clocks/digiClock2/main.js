const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(function time() {
  let today = new Date();
  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();
  let h = today.getHours();
  let min = today.getMinutes();
  let s = today.getSeconds();

  // Add leading zeros for single-digit hours, minutes, and seconds
  h = h.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");

  day.textContent = `${d} ${monthName[m]} ${y}`;
  hour.textContent = h;
  minute.textContent = min;
  second.textContent = s;
}, 1000); // Update every 1 second
