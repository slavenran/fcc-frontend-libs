import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react';

// types
const ADD = 'ADD';

// action creator (dispatcher) and action (state)
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  };
}

// reducer
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
          return [
            ...state,
            action.message
          ];
        default:
          return state;
    }
}

// store
const store = createStore(messageReducer);

// components
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage() {
        console.log('submitted');
        this.setState(state => {
            return {
                input: '',
                messages: state.messages.concat(state.input)
        }});
    }

    handleChange(e) {
        console.log('changed');
        this.setState({
            input: e.target.value
        });
    }

    render() {
      const list = this.state.messages.map((elem, idx) => (<li key={idx}>{elem}</li>));

      return(
          <div className="App-center">
            <h1>Type in a new message:</h1>
            <input onChange={this.handleChange} value={this.state.input} />
            <button onClick={this.submitMessage}>Submit</button>
            <ul>{list}</ul>
          </div>
      );
    }
}

// component using redux
class DisplayMessagesRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage() {
      console.log('submitted');
      this.props.submitNewMessage(this.state.input);
      this.setState({
        input: ''
      });
  }

  handleChange(e) {
      console.log('changed');
      this.setState({
          input: e.target.value
      });
  }

  render() {
    const list = this.props.messages.map((elem, idx) => (<li key={idx}>{elem}</li>));

    return(
        <div className="App-center">
          <h1>Type in a new message:</h1>
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>{list}</ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => dispatch(addMessage(message))
  }
}

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>This is a Presentational Component</h3>
  }
}

// connect component and redux (we can omit map functions with null)
const ConnectedComponent = connect(null, null)(Presentational);
const ReduxMessages = connect(mapStateToProps, mapDispatchToProps)(DisplayMessagesRedux);

export default function Redux() {
    return(
      <div className="App-header">
        <Provider store={store}>
            <DisplayMessages />
            <ConnectedComponent />
            <ReduxMessages />
        </Provider>
      </div>
    );
}