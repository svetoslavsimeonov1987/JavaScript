function solve(fruitType, gramsFruits, pricePerKG){
    let kgToBuy = gramsFruits / 1000;
    let priceToPay = kgToBuy * pricePerKG;
    console.log(`I need ${priceToPay.toFixed(2)} leva to buy ${kgToBuy.toFixed(2)} kilograms ${fruitType}.`)
}


solve('orange', 2500, 1.80);