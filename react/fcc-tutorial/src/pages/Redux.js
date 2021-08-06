import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'

const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

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

const store = createStore(messageReducer);

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
      
      const list = this.state.messages.map(elem => (<li key={elem.slice(0, 2)}>{elem}</li>));

      return(
          <div className="App-header">
            <h1>Type in a new message:</h1>
            <input onChange={this.handleChange} value={this.state.input} />
            <button onClick={this.submitMessage}>Submit</button>
            <ul>{list}</ul>
          </div>
      );
    }
};

export default function Redux() {
    return(
        <Provider store={store}>
            <DisplayMessages />
        </Provider>
    );
}