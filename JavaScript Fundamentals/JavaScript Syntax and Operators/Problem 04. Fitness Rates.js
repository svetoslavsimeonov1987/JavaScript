function solve(day, service, time){
    let price = 0;
        
    price = PriceCalcAllDay(day, time, service);
        
    console.log(price);

}

function PriceCalcAllDay (day, time, service){
    if (day == "Saturday" || day == "Sunday") {
        switch (service){
            case "Fitness":
                if (time > 8.00 && time < 15.00) {
                    price = 8.00;
                    return price;
                }
                else{
                    price = 8.00;
                    return price;
                }
            break;
    
            case "Sauna":
                if (time > 8.00 && time < 15.00) {
                    price = 7.00;
                    return price;
                }
                else{
                    price = 7.00;
                    return price;
                }
            break;
    
            case "Instructor":
                if (time > 8.00 && time < 15.00) {
                    price = 15.00;
                    return price;
                }
                else{
                    price = 15.00;
                    return price;
                }
            break;
    
        }
    } else {
        switch (service){
            case "Fitness":
                if (time > 8.00 && time < 15.00) {
                    price = 5.00;
                    return price;
                }
                else{
                    price = 7.50;
                    return price;
                }
            break;
    
            case "Sauna":
                if (time > 8.00 && time < 15.00) {
                    price = 4.00;
                    return price;
                }
                else{
                    price = 6.50;
                    return price;
                }
            break;
    
            case "Instructor":
                if (time > 8.00 && time < 15.00) {
                    price = 10.00;
                    return price;
                }
                else{
                    price = 12.50;
                    return price;
                }
            break;
    
        }
    }
}

solve('Sunday', 'Fitness', 22.00);