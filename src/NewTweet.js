import { useEffect } from "react";

function NewTweet({ setTweet }) {

    const onSubmit = (event) => {
      event.preventDefault(); 

      const newTweet = {
        'keyword': event.target.keyword.value,
        'likes': event.target.likes.value,
        'tweet': event.target.tweet.value
      };
      console.log(newTweet)
  
      fetch('http://localhost:3000/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newTweet)
      })
        .then(response => response.json())
        .then((newData) => console.log(newData))
        // .then(newData => setTweet(prev => [...prev, newData]));
    };
  
    return (
      <div>
        <h3>New Tweet</h3>
        <form onSubmit={onSubmit}>
          <input type="text" name="keyword" placeholder="Keyword" />
          <input type="text" name="likes" placeholder="Likes" />
          <input type="text" name="tweet" placeholder="Tweet" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
  
  export default NewTweet;
  