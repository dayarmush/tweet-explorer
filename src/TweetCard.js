import {useState} from 'react'
import Buttons from "./Buttons";

function TweetCard({ singleTweet, isLoggedIn, handleLike, setTweets, tweets  }) {

  const { likes, tweet, id } = singleTweet;

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  function handleClick() {
    setIsLiked(!isLiked);

    if (isLoggedIn && !isLiked) {
      setLikeCount(preCount => preCount + 1);
    } else if (isLoggedIn) {
      setLikeCount(preCount => preCount - 1);
    }
  }

  function handleDelete() {
    fetch(`http://localhost:3000/twitter/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => { 
      return setTweets(prevTweets => prevTweets.filter(tweet => tweet.id !== id));
    })
  } 
  
  return (
    <div className="card">
      <p>{tweet}</p>
      <p><span className="likes">❤️ {likeCount}</span></p>
      {isLoggedIn && isLiked ? 
        <Buttons callBack={handleClick} text="Dislike"/> : 
        <Buttons callBack={handleClick} text="Sweet Tweet"/>
      }
      {isLoggedIn && <Buttons callBack={handleDelete} text="Delete"/>}
      {isLoggedIn && <Buttons text='Add to Liked' callBack={() => handleLike(id)}/>}
    </div>
);
}




export default TweetCard