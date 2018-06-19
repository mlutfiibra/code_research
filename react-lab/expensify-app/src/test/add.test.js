const add = (a, b) => a + b;

test('Should add two number', () => {
    const result = add(4, 2);
    expect(result).toBe(7);

    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
    // }
});