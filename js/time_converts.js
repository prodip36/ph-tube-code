function convertSeconds(seconds) {
let day=Math.floor(seconds/(24*3600));
  let hrs = Math.floor((seconds%(24*3600)) / 3600);        // 1 hour = 3600 seconds
  let mins = Math.floor((seconds % 3600) / 60); // Remaining minutes
  let secs = seconds % 60;                      // Remaining seconds

  return `${day}d ${hrs}hrs ${mins}min ${secs}sec ago`;
}


