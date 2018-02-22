// JSX
console.log('App.js is running');

// Object
const app = {
    title: 'Instinct List',
    subtitle: 'Never afraid of being single fighter',
    options: []
}

const user = {
    name: 'Lutfi',
    age: 23,
    location: 'Jakarta'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

// JSX - Javascript XML Function
const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}

            <p>{app.options.length > 0 ? 'Here are ur opt' : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeAction}>What should I do?</button>
            <ol>
                {
                    app.options.map((option, value) => {
                        return <li key={value}>Options: {option}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>

            <button onClick={resetOptions}>Reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const renderApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
};

let count = 0;

const addOne = () => {
    count++;
    renderApp();
}

const minusOne = () => {
    count--;
    renderApp();
}

const reset = () => {
    count = 0;
    renderApp();
}

const resetOptions = () => {
    app.options = [];
    renderForm();
}

const onFormSubmit = (e) => { // e=event
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderForm();
    }
};

const onMakeAction = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    console.log(randomNum);
};

const appRoot = document.getElementById('app');
// renderApp();
renderForm();

// ReactDOM.render(template, appRoot);
