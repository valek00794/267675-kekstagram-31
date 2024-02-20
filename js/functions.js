function stringTimeToMinutes (stringTime) {
  return stringTime.split(':').reduce((acc, el) => acc * 60 + +el);
}

function checkDuration (startWorkTime, endWorkTime, meetStartTime, meetDuration) {
  return stringTimeToMinutes(meetStartTime) >= stringTimeToMinutes(startWorkTime) &&
  (stringTimeToMinutes(meetStartTime) + meetDuration) <= stringTimeToMinutes(endWorkTime);
}

checkDuration('08:00', '17:30', '14:00', 90); // true
checkDuration('8:0', '10:0', '8:0', 120); // true
checkDuration('08:00', '14:30', '14:00', 90); // false
checkDuration('14:00', '17:30', '08:0', 90); // false
checkDuration('8:00', '17:30', '08:00', 900); // false
