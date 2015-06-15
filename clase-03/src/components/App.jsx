const React = require('react');
const TweetList = require('./TweetList.jsx');
const SearchControls = require('./SearchControls.jsx');
const TweetsStore = require('../stores/TweetsStore');


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tweets      : [],
      queryHistory: [],
      currentQuery: ""
    };
  }

  componentDidMount() {
    // --> subscribir a cambios en TweetsStore y manejarlos con _onChange!
    TweetsStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    // --> de-subscribir a cambios en TweetsStore aqui!
    TweetsStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div className="app">
        <SearchControls
          currentQuery = {this.state.currentQuery}
          queryHistory = {this.state.queryHistory} />
        <TweetList
          query  = {this.state.currentQuery}
          tweets = {this.state.tweets} />
      </div>
    );
  }

  /**
   * Event handler for 'change' events coming from the Stores
   */
  _onChange() {
    // --> setear el estado que me empuja TweetsStore
    this.setState(TweetsStore.getState());
  }
}

module.exports = App;
