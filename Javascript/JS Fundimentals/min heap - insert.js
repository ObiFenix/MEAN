function insertIntoHeap(heap, val){
    if(heap.length < 1){
        heap.length = 2;
        heap[1] = val;
    }
    else{
        var hold;
        heap.push(val);
        i = heap.length -1
        while(heap[i] < heap[Math.floor(i / 2)]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i / 2)]
            heap[Math.floor(i / 2)] = hold
            i /= 2
        }
    }
    return heap
}
// sample outputs:
console.log(insertIntoHeap([], 13));  // alters the empty array to be [undefined, 13]
console.log(insertIntoHeap([undefined, 2, 10, 8, 18, 16, 15, 17], 7)); // alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 11]


