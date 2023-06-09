import Buttons from "./Buttons";

function NewTweet({ setTweets, setPosted }) {

  const onSubmit = (event) => {
    event.preventDefault(); 
      
    const newTweet = {
      'keyword': event.target.keyword.value,
      'likes': 0,
      'tweet': event.target.tweet.value
    };
    
    setPosted(prePosted => [...prePosted, newTweet])

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
      <Buttons text="Tweet" type="submit" styling="submit-button" />
    </form>
  );
}
  
export default NewTweet;
  