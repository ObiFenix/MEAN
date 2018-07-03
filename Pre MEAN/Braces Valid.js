
function bracesValid(str){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var arr = [];
    for (var i = 0; i < str.length; ++i)
        if (str[i] === '(' || str[i] === '[' || str[i] === '{'){
            arr.push(str[i]);
            console.log(arr);
        }
        else if (arr[arr.length-1] === pairs[str[i]]){
            arr.pop();
            console.log(arr);
        }
        else{
            return false;
        }
    return true;

}

console.log(bracesValid("{(})"));
