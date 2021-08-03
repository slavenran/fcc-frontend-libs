import React from 'react'

const styles = {
    color: "purple",
    fontSize: 20,
    border: "2px solid purple"
}

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp',
        clicked: 0
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            name: "You clicked!",
            clicked: state.clicked + 1
        }));
    }

    render() {
      const name = this.state.name;
      return (
        <div>
          <button style={{color: "red"}} onClick={this.handleClick}>Click Me</button>
          <h1>{ name }: { this.state.clicked }</h1>
        </div>
      );
    }
}

class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState((state) => ({
            submit: state.input
        }));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
}

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return(
            <div>
                <input onChange={ this.handleChange } />
                <p>{this.state.input}</p>
            </div>
        );
    }
}

class SimpleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((state) => ({
            count: state.count + 1
        }));
    }

    decrement() {
        this.setState((state) => ({
            count: state.count - 1
        }));
    }

    reset() {
        this.setState({
            count: 0
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <p>Current count: {this.state.count}</p>
            </div>
        );
    }
}

class DisappearingText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((state) => ({
            visibility: !state.visibility
        }));
    }

    // toggleVisibility() {
    //     this.setState(state => {
    //       if (state.visibility == false) {
    //         return { visibility: true };
    //       } else {
    //         return { visibility: false };
    //       }
    //     });
    // }

    render() {
        return(
            <div>
                <button onClick={ this.toggleVisibility }>Click to hide</button>
                {/* If visibility is true (condition), then return markup right of && */}
                {this.state.visibility && <div>Now you see me!</div>}
            </div>
        );
    }
}

class Doggie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Default doggie name"
        }
    }

    render() {
        return (
            <h1 style={styles}>The doggie name is: {this.state.name}</h1>
        );
    }
}

class Kitten extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>I'm a kitten of a {this.props.race}</h1>
        );
    }
}

const CurrentDate = (props) => {
    return (
        <p>Today's date is: {props.date}</p>
    )
}

CurrentDate.defaultProps = { date: "unknown date" };

export default function Test() {
    return(
        <div className="App-header">
            <MyComponent />
            <SimpleCounter />
            <ControlledInput />
            <Doggie />
            <Kitten race="British Gray" />  {/* race is a prop of Kitten */}
            FCC tests: 
            <CurrentDate date={Date()}/>
            <DisappearingText />
            <MyForm />
        </div>
    )
}