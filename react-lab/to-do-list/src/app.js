// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('app.js is running!');

var app = {
    title: 'Lazy Afternoon',
    subtitle: 'Need more people to talk'
}

var template = (
    <div>
        <h1 id="someid">{`${app.title}`}</h1> 
        <p>{`${app.subtitle}`}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name : 'lutfi',
    age: 23,
    location: 'Jakarta'
};
var userName = 'Donald';
var userAge = 22;
var userLocation = 'Bandung';

var templateTwo = (
    <div>
        <h1>{`${userName} Duck & ${user.name}`}</h1>
        <p>{`Age: ${userAge}`}</p>
        <p>{`Location: ${userLocation}`}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);