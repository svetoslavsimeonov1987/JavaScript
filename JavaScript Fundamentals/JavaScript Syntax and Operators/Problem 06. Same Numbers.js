function solve(input){
   let number
   let element = input.toString();
   let isEquel = true;
   let controlElement = parseInt(element[0]); 
   let sum = controlElement;

   for (let i = 1; i < element.length; i++) {
      if (parseInt(element[i]) != controlElement) {
         isEquel = false;
      }

      sum += +element[i];
      
   }
   console.log(isEquel);
   console.log(sum);
}