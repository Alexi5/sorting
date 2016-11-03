function split(array){

	var len = array.length;
	var newLen;
	var firstHalf = [], secondHalf=[];
	
	//look at array length
		//if even
		if(len%2 === 0){
			//sets cut off point
			newLen = len/2;
		} 
		//if odd
		else {
			newLen = (len-1)/2;
		}

		for(var i=0; i<newLen; i++){
			firstHalf.push(array[i]);
		}

		for(var j= newLen; j<len; j++){
			secondHalf.push(array[j]);
		}
		

	return [firstHalf, secondHalf];
}


function merge(arr1, arr2){

	var mergeArray = arr1.concat(arr2);

	return mergeArray;
}

function mergeSort(array, array2){

	//if array = 2 arrays - merge
	if(array2){
		array = merge(array, array2);
	}

	//Sort
	array = bubbleSort(array);

	return array;

}