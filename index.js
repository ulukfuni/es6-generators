//ES6 generators make it possible to pause
//and resume function execution at arbitrary points

/**
 * putting an asterisk after function makes the function
 * a generator
 * @return {Generator} [description]
 */
function* createLogger() {
	console.log('start');
	yield; //function stops here unless you call the function with method next()
	console.log('end');
};

const logger = createLogger();
logger.next(); //this executes first block until keyword yield
logger.next();


//you can send messages to and from the instance of Generator
//and Generator
function* hello() {
	yield 'first';
};

const hi = hello();
console.log(hi.next();) //this will return {value: 'first', done:false};

//error handling
function* yes() {
	try {
		const word = yield;
		console.log('hello ${word}');
	} catch(err) {
		console.log('error:', err);
	}
};

const no = yes();
no.next();
no.throw('something went wrong'); //can throw error at the stopping point of Generator





