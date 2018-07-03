function bubbleSort(arr){
    var hold
    for(var i=arr.length;i>0;i--){
        for(var y=0;y<i;y++)
            if(arr[y] > arr[y+1]){
                hold = arr[y]
                arr[y] = arr[y+1]
                arr[y+1] = hold
            }
    }
    return arr
}
console.log(bubbleSort([10,5,7,6,11,99,47,50,4,3,7,1]));