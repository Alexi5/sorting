describe('Split Array Function', function(){

	it('is able to split an array into 2 halves', function(){
		expect(split([2,3,4,5,6,8,9,12,13]) ).toEqual([[2,3,4,5], [6,8,9,12,13]]);
	});

});

describe('Merge Array Function', function(){

	it('is able to merge 2 arrays into one', function(){
		expect(merge([2,3,4,5], [6,8,9,12,13]) ).toEqual([2,3,4,5,6,8,9,12,13]);
	});

});


describe('Merge Array Function', function(){

	it('is able to merge 2 arrays into one', function(){
		expect(mergeSort([2,3,4,12], [6,8,9,5,13]) ).toEqual([2,3,4,5,6,8,9,12,13]);
	});

});