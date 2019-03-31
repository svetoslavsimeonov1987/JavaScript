function solve(input){
   
   foodList = {

   }

   for (let i = 1; i < input.length; i++) {
      if(!(i%2==0)){   
         foodList[input[i-1]] = +input[i];
      }
      
   }
   
   console.log(foodList);
}