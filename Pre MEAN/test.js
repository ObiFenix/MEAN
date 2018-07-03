// def coins(monies):
//     d = {
//         'q' : 25,
//         'd' : 10,
//         'n' : 5,
//         'p' : 1,
//         }
//     totalCoins = []
//     for i in d:
//         count = int(monies / d[i])
//         totalCoins.append(count)
//         monies -= d[i] * count
//     return totalCoins

var obj = { first: "John", last: "Doe" };
// Visit non-inherited enumerable keys
Object.keys(obj).forEach(function(key) {
    console.log(key);
});