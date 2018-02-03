import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://12b557b7.ngrok.io/coins/',
      allTheCoins: [],
      selectedCoin: {}
    };
  }

  componentDidMount() {
    this.fetchData(this.state.url);
  }

  fetchData(url) {
    fetch(url)
      .then(data => data.json())
      .then(json => this.setState({allTheCoins: json}));
  }

  fetchSingleCoinData(coin){
    const url = this.state.url + coin;
    fetch(url)
      .then(data => data.json())
      .then(json => this.setState({selectedCoin: json}));
  }

  render() {
    return(
      <div>
        <h1>React Crypto Currency Stock</h1>
        {this.state.allTheCoins &&
          <select onChange={(e) => this.fetchSingleCoinData(e.target.value)}>
            {
              this.state.allTheCoins.map(coin =>
                <option key={coin.id} value={coin.id}>{coin.name}</option>
              )
            }
          </select>
        }
      </div>
    );
  }
}

export default App;
