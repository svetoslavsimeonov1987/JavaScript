function solve(numberOfSteps, studentFootprint, studentSpeedInKM){
   
   let distanceInMeters = numberOfSteps * studentFootprint;

   let speedInSeconds = studentSpeedInKM / 3.6;

   let timeSeconds = Math.round(distanceInMeters / speedInSeconds);

   let rest = Math.floor(distanceInMeters / 500);
   timeSeconds += rest * 60;
   let seconds = timeSeconds % 60;
   let minutes = ((timeSeconds - seconds) / 60) % 60;
   let hours = Math.floor((timeSeconds - seconds) / 3600);
   
   

   formatTheOutput(hours, minutes, seconds);

   function formatTheOutput(hours, minutes, seconds){
      if (hours < 10) {
         hours = '0' + hours;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      if (seconds < 10) {
         seconds = '0' + seconds;
      }

      console.log(`${hours}:${minutes}:${seconds}`);
   }
   

}