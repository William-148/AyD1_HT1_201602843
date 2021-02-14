function swap(i : number, j: number, array : number[]) : void{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array : number[]) : void{
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                swap(j, j+1, array);
            }
        }
    }
}