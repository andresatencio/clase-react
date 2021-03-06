const AppDispatcher = require('../dispatcher/AppDispatcher');
const TweetsConstants = require('../constants/TweetsConstants.js');
const getTweets = require('../utils/getTweets.js');

const TweetsActions = {
  /**
   * queryTweets is ASYNC!
   * @param {string} The search query
   * @return {Promise} dispatched action
   */
  query: function(query) {
    return getTweets(query)
      .then( response =>
        AppDispatcher.dispatch({
          actionType: TweetsConstants.QUERY,
          query     : query,
          tweets    : response ? JSON.parse(response).statuses : []
        })
      );
  },

  /**
   * @param {string} The search query id
   * @return {object} action containing fetched tweets
   */
  queryFromHistory: function(id) {
    AppDispatcher.dispatch({
      actionType: TweetsConstants.QUERY_FROM_HISTORY,
      id        : id
    });
  }

};

module.exports = TweetsActions;
