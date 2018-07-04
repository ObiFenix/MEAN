function removeFromMinHeap(heap){
    var removed = heap[1];
    var hold;
    hold = heap[1];
    heap[1] = heap[heap.length -1];
    heap[heap.length -1] = hold;
    heap.pop()
    var i = 1;
    if (heap[i] > heap[Math.floor(i * 2)]){        
        while(heap[i] > heap[Math.floor(i * 2)]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i * 2)]
            heap[Math.floor(i * 2)] = hold
            i *= 2
        }
    }
    else if(heap[i] > heap[Math.floor(i * 2)+1]){
        while(heap[i] > heap[Math.floor(i * 2)+1]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i * 2)+1]
            heap[Math.floor(i * 2)+1] = hold
            i *= 2
        }
    }
    console.log(heap);
    
return removed
}

console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]));
// changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3
console.log(removeFromMinHeap([undefined, 8]));
// changes the heap to [undefined] and returns 8
