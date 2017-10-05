console.log('Starting app');

setTimeout(() => {
	console.log('2000 milisecond of callback');
}, 2000);

setTimeout(() => {
	console.log('0 milisecond of callback');
}, 0);

console.log('Finishing app');