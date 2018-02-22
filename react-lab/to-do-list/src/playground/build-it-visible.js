const appRoot = document.getElementById('app');

class VisibilityToogle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>Hey. Theres more lot to do than coding!</div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToogle />, appRoot);


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>Hey. Theres more lot to do than coding!</div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, appRoot);
// };

// render();
