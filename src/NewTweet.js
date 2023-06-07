import { useEffect } from "react";

function NewTweet({ setTweets }) {

    const onSubmit = (event) => {
      event.preventDefault(); 

      const newTweet = {
        'keyword': event.target.keyword.value,
        'likes': 0,
        'tweet': event.target.tweet.value
      };

  
      fetch('http://localhost:3000/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newTweet)
      })
        .then(response => response.json())
        .then(newData => setTweets(prev => [...prev, newData]));
        event.target.reset()
    };
  
    return (
      <form className="new-tweet-container" onSubmit={onSubmit}>
        <h3>New Tweet</h3>
        <div className="tweet-content">
          <input type="text" name="keyword" placeholder="Category" className="keyword-input"/>
          <textarea type="text" name="tweet" placeholder="Tweet" className="textarea-field"/>
        </div>
        <button type="submit" className="submit-button">Tweet</button>
      </form>
    );
}
  
  export default NewTweet;
  