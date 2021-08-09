import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

class QuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: "rgb(42, 191, 114)",
        opacity: 1,
        isLoaded: false,
        items: [],
        quote: "",
        author: ""
      }
      this.pickRandomColor = this.pickRandomColor.bind(this);
      this.pickRandomQuote = this.pickRandomQuote.bind(this);
    }
    
    componentDidMount() {
      fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState(() => {
              const randomNum = Math.floor(Math.random() * result.length);
              return {
              isLoaded: true,
              items: result,
              quote: result[randomNum].text,
              author: result[randomNum].author
            }});
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
    pickRandomQuote() {
      this.setState(state => {
        const quotes = state.items;
        const randomNum = Math.floor(Math.random() * quotes.length);

        return {
          quote: quotes[randomNum].text,
          author: quotes[randomNum].author,
          opacity: 1
        }});
    }
    
    pickRandomColor() {
      setTimeout(function() {
      this.pickRandomQuote();
    }.bind(this), 700);

      let color = "rgb(";
      for (let i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 256) + ", ";
      }

      color = color.slice(0, color.length-2) + ")";
      this.setState({
        bgColor: color,
        opacity: 0
      });
    }
    
    render() {
      return (
        <div className="App-header ease-color" style={{backgroundColor: this.state.bgColor}}>
          <div id="quote-box">
            <div id="text" className="ease-color" style={{color: this.state.bgColor, opacity: this.state.opacity}}><FontAwesomeIcon id="quote" icon={faQuoteLeft}/>{this.state.quote}</div>
            <div id="author" className="ease-color" style={{color: this.state.bgColor, opacity: this.state.opacity}}>- {this.state.author}</div>
            <div id="buttons">
              <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote} ${this.state.author}`} target="_blank" rel="noreferrer" className="button ease-color" style={{backgroundColor: this.state.bgColor}}>
              <FontAwesomeIcon icon={faTwitter}/></a>
              <button id="new-quote" onClick={this.pickRandomColor} className="button ease-color" style={{backgroundColor: this.state.bgColor, padding: "8px 20px"}}>New quote</button>
            </div>
          </div>
        </div>
      );
    }
  }

export default function RandomQuoteMachine() {
    return (
        <QuoteMachine />
    )
}