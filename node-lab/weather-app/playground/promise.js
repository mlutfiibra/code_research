//CREATE PROMISES AND FUNCTION TO HANDLE THE PROMISE

var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Arguments must be numbers.');
			}
		}, 1500);		
	});
};

//FUNCTION TO HANDLE THE PROMISE
asyncAdd(5, 7).then((results) => {
	console.log(`Results: ${results}`);
	return asyncAdd(results, 33);
})
//called when asyncAdd executed 
.then((results) => {
	console.log(`Should be 45, ${results}`);
}).catch((errorMessage) => {
	console.log(`Through Promise: ${errorMessage}`);
});

// var somePromise = new Promise((resolve, reject) =>{
// 	setTimeout(()=>{ 
// 		//resolve('Hey, It worked!');
// 		reject('Unable to fulfill promise'); //called when promise didnt go well
// 	}, 2500);
// });

// //CALLBACK FUNCTION FOR SUCCESS AND FAILED
// somePromise.then((message) =>{
// 	console.log(`Success: ${message}`);
// },(errorMessage) =>{
// 	console.log(`Error: ${errorMessage}`);
// }); 