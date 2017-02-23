/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples
Input Output
time:
"3:00pm"  "15:00"
time:
"9:15am"  "09:15"
time:
"12:00am" "00:00"
time:
"04:00" "04:00"
 */

function toMilitary (time) {
  if(/pm/.test(time)) {
    if(time.slice(0, 2) === '12') return time.slice(0, 5);
    if(time.indexOf(':') === 1) return '' + (Number(time.charAt(0)) + 12) + ':' + time.slice(2, 4);
    return '' + (Number(time.slice(0, 2)) + 12) + ':' + time.slice(3, 5);
  }
  
  if(/am/.test(time)) {
    if(time.slice(0, 2) === '12') {
      return '00:' + time.slice(3, 5);
    }
    if(time.indexOf(':') === 1) {
      return '0' + Number(time.charAt(0)) + ':' + time.slice(2, 4);
    }
    return '' + Number(time.slice(0, 2)) + ':' + time.slice(3, 5);
  }
  
  return time;
}
