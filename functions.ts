  
function getPivot(value : number) : number{
    return value % 2 == 0 ? value : value - 0.5;
}

function getPivot2(value : number) : number{
    return value % 2 == 0 ? value : value + 0.5;
}

//Funcion QuickSort
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

//Función QuickSort2
function partition(array: number[], low: number, high: number) : number{
    let pivot = array[high];

    let i: number = low-1;

    for(let j=low; j <= high-1; j++){
        if(array[j] < pivot){
            i++;
            swap(i, j, array);
        }
    }
    swap(i+1, high, array);
    return i+1;
}

function quickSort2(array: number[], low: number, high: number) : void{
    if(low < high){
        let pi: number = partition(array, low, high);

        quickSort2(array, low, pi-1);
        quickSort2(array, pi+1, high);
    }
}

//Función BubleSort
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


//Ordenando el array con quick sort 2
quickSort2(collection, 1, 88);