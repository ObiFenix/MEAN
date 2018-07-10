var hashMap = [];
hashMap.length = 30; 

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;  // bitwise operators are used to manipulate the string in binary
        hash &= hash;                
    }
    return hash;                         // by the end of the loop, the hash is unique to this string
}
// Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
var hashedKey = "role".hashCode();

function mod(input, div){
    return (input % div + div) % div;
}
// use the function to get the index position where we should store our data
var idx = mod(hashedKey, hashMap.length);

function hashInsert(key,val,hashMap){
    var hashedKey = key.hashCode();
    var idx = mod(hashedKey, hashMap.length);
    if(hashMap[idx] == undefined){
        hashMap[idx] = [[key,val]]
    }
    else{
        hashMap[idx].push([key,val])
    }
return hashMap
}
hashInsert('Name','Dan',hashMap);
hashInsert('Name','Eric',hashMap);
console.log(hashMap);


