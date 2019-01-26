function solve(day, service, time){

   function dayOfWeek(day) {
      return ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].indexOf(day);
   }
   let price = 0;
   let weekDays = {
      "Fitness": 5,
      "Sauna": 4,
      "Instructor": 10
   }

   let weekEndDays = {
      "Fitness": 8,
      "Sauna": 7,
      "Instructor": 15
   }



   if (dayOfWeek(day) < 5) {
      if(time <= 15){
         price = weekDays[service];
      }
      else{
         price = weekDays[service] + 2.5;
      }
   }
   else{
         price = weekEndDays[service];
   }

   console.log(price);
}