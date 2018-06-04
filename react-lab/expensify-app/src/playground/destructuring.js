const person = {
    name: 'muhammad',
    age: 23,
    location: {
        city: 'Jakarta',
        country: 'Indonesia'
    }
};

const { name, age } = person;

const address = ['Jl Bekalivron', 'Indonesia', '10477'];
const [street, country, zip] = address;

console.log(`${street} is ${zip}`);