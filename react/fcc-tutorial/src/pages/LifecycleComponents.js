import React from 'react'

class DidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((state) => ({
                seconds: state.seconds + 1
            }));
        }, 1000);
    }

    render() {
        return(
            <div>
                <h1>Seconds: {this.state.seconds}</h1>
            </div>
        );
    }
}

class EventListener extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
};

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      return nextProps.value % 2 === 0;
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
};
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
};

export default function LifecycleComponents() {
    return(
        <div className="App-header">
            <DidMount />
            <EventListener />
            <Controller />
        </div>
    );
}