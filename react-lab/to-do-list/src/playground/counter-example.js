class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        // Asyncnh
        // React method to update/re-render component automatically
        this.setState((prevState) => { //prevState = prev state before change apply
            return {
                count: prevState.count + 1
            };
        }); 
    }

    handleMinusOne() {
        this.setState((prevState) => {
            render() {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            render() {
                count: 9
            };
        });

        // this.setState((prevState) => {
        //     render {
        //         count: prevState.count + 1;
        //     };
        // });
    }

    // ======= LIFECYCLE ======= //
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }

        }catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json); // key value
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));
