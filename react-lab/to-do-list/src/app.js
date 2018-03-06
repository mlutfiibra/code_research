// Local scope
// import './utils.js';
// import substract, { square, add } from './utils.js';
// import isSenior, {isAdult, canDrink} from './person.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(2,1));
// console.log(substract(15, 6));
 
// console.log(isAdult(20));
// console.log(canDrink(15));
// console.log(isSenior(15));

// =========== //
//  VALIDATOR  //

// install -> import -> use
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

import InstinctApp from './components/InstinctApp';

const layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>THis is my page.</p>
    </div>
);

ReactDOM.render(<InstinctApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Adem';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Jude';

    getGreetings= () => `Hi, my name is ${this.name}`;
}

const newSyntax = new NewSyntax();
console.log(newSyntax.getGreetings());
