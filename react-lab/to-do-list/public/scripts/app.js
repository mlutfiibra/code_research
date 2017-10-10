'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('app.js is running!');

var app = {
    title: 'Lazy Afternoon',
    subtitle: 'Need more people to talk'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'someid' },
        '' + app.title
    ),
    React.createElement(
        'p',
        null,
        '' + app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'lutfi',
    age: 23,
    location: 'Jakarta'
};
var userName = 'Donald';
var userAge = 22;
var userLocation = 'Bandung';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName + ' Duck & ' + user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ' + userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ' + userLocation
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
