  
function getPivot(value : number) : number{
    return value % 2 == 0 ? value : value - 0.5;
}

function getPivot2(value : number) : number{
    return value % 2 == 0 ? value : value + 0.5;
}

function quickSort(low: number, high: number, array : number[]) : void{
    let i = low;
    let j = high;
    let pivot = array[getPivot2((low + high) / 2)];

    while(i <= j){
        while(array[i] < pivot){
            i++;
        }

        while(array[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(i, j, array);
            i++;
            j--;
        }
    }

    if(low < j){
        quickSort(low, j, array);
    }
    if(i < high){
        quickSort(i, high, array);
    }
}

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


//Ordenando el array
let collection = [88,1,5,22,14,77,33];
bubbleSort(collection);


//Ordenando el array con quick sort
quickSort(1, 88, collection);