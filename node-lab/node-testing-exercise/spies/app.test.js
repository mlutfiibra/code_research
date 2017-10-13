const EXPECT = require('expect');

describe('App', () => {
	it('should call the spy correctly', () => {
		var spy = EXPECT.createSpy();
		spy('Harry', 27);
		EXPECT(spy).toHaveBeenCalled('Harry', 27);
	})
});