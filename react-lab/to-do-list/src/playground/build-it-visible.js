const appRoot = document.getElementById('app');
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>Hey. Theres more lot to do than coding!</div>
            )}
        </div>
    );

    ReactDOM.render(jsx, appRoot);
};

render();
