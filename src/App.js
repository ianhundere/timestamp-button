import React, { Component } from 'react';
import './App.css';

class Timebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }
  _showTime = () => {
    this.setState({
      dates: [...this.state.dates, new
        Date().toLocaleString()]
    });
  }
  render() {

    return (
      <div className="App">
        <body className="App-header">
          <button type="submit" onClick={this._showTime}>time</button>
          <ul>
            {this.state.dates.map((date) => {
              return <li key={date}>{date}</li>;
            })}
          </ul>
        </body>
      </div>
    )
  }
}

export default Timebutton;