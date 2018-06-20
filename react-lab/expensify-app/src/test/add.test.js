const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('Should add two number', () => {
    const result = add(4, 2);
    expect(result).toBe(6);

    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
    // }
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike');
});

test('should generate greeting from no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});