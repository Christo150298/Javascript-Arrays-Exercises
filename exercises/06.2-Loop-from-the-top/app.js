let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

const lastPos = mySampleArray.length -1 ;
const stopAt = 0

for(let i = lastPos; i >= stopAt; i = i - 1)
{
	console.log(mySampleArray[i]);
}