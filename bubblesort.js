function bubbleSort(arr, arr2){
	var temp, counter = 0;

	if(arr2){
		arr = arr.concat(arr2);
		//console.log(arr);
	}

	for(var i = 0; i < arr.length; i++){
		
		for(var j = 0; j < arr.length; j ++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j] ;
				arr[j]  = arr[j+1];
				arr[j+1] = temp;

				swapCount();
				//console.log(swapCount);

			}
		}
	}

	return arr;
}


function swapCount(){
	return;
}