function fizzbuzz(n){
    str = '';
    if(n<1){str = 'Must be a positive number.'; return str};
    for(var i = 1;i<=n;i++){
        if(i%5 == 0 && i%3 == 0){
            str += ('FizzBuzz, ');
        }
        else if(i%3 == 0){
            str += ('Fizz, ');
        }
        else if(i%5 == 0){
            str += ('Buzz, ');
        }
        else{
            str += (i + ', ')
        }
    }
    str = str.slice(0,-2)
    str += '.'
    return str
}

console.log(fizzbuzz(50));
