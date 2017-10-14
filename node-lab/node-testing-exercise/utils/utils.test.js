const EXPECT = require('expect');

const UTILS = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
	        var res = UTILS.add(33, 11);

	        EXPECT(res).toBe(44).toBeA('number');
    	});
	});

    it('should async add two numbers', (done) => {
        UTILS.asyncAdd(4, 3, (sum) => {
            EXPECT(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should sqare a numbers', () => {
        var sqr = UTILS.square(4);

        EXPECT(sqr).toBe(16).toBeA('number');
    });

    it('should async sqare a numbers', (done) => {
        UTILS.asyncSquare(5, (times) => {
            EXPECT(times).toBe(25).toBeA('number');
            done();
        });
    });

    it('should verify first and last names are set', () => {
        var user = {};
        var checkName = UTILS.setName(user, 'm lutfi');

        EXPECT(checkName).toInclude({
            firstName: 'm',
            lastName: 'lutfi'
        });
    });

});
// it('should expect some values', () => {
// 	// EXPECT(12).toNotBe(11);
// 	// EXPECT({name: 'lutfi'}).toEqual({name: 'lutfi'});

// 	//EXPECT([2,3,4]).toInclude(0); //check the array value

// 	EXPECT({
// 		name: 'm lutfi',
// 		age: 23,
// 		location: 'Jakarta'
// 	}).toExclude({
// 		age:25
// 	})
// });