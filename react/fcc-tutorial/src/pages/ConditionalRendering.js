import React from 'react'

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        userAge: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {this.state.userAge === '' ? buttonOne : this.state.userAge < 18 ? buttonThree : buttonTwo}
        </div>
      );
    }
}

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Transform expression into win or lose situation
      return <h1>{this.props.fiftyFifty === 1 ? "You Win!" : "You Lose!"}</h1>;
    }
}
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        return {
          // Update the state counter for each button click
          counter: prevState.counter + 1
        }
      });
    }
    render() {
      // Make a random number that will equal to true or false
      const expression = Math.random() >= 0.5 ? 1 : 0;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
}

export default function ConditionalRendering() {
    return(
        <div className="App-header">
            <CheckUserAge />
            <GameOfChance />
        </div>
    )
}