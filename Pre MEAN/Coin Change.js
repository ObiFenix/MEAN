function coins(monies){
    d = {
        'dollars' : 100,
        'quarters' : 25,
        'dimes' : 10,
        'nickels' : 5,
        'pennies' : 1
    };    
    var totalCoins = {},
    count = 0
    Object.keys(d).forEach(function(key) {
        count = Math.floor(monies / d[key]);
        if (count > 0){
            totalCoins[key] = count;
        }
        monies -= d[key] * count;
    })
return totalCoins;
}
console.log(coins(157));



