'use strict';

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InstinctApp = require('./components/InstinctApp');

var _InstinctApp2 = _interopRequireDefault(_InstinctApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var layout = function layout() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            'Header'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Footer'
        )
    );
};

var template = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        'Page Title'
    ),
    _react2.default.createElement(
        'p',
        null,
        'THis is my page.'
    )
);

_reactDom2.default.render(_react2.default.createElement(_InstinctApp2.default, null), document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Adem';
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax {
//     name = 'Jude';

//     getGreetings= () => `Hi, my name is ${this.name}`;
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax.getGreetings())
