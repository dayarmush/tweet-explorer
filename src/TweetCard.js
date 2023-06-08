import Buttons from "./Buttons";
import { useState } from 'react';

function TweetCard({ singleTweet, isLoggedIn }) {

  const [liked, setLiked] = useState([])

  const { likes, tweet, id } = singleTweet;

  function handleLike() {

  }
  
    return (
    <div className="card">
      <p>{tweet}</p>
      <p><span className="likes">❤️ {likes}</span></p>
      {isLoggedIn && <Buttons text='Add to Liked' callBack={handleLike}/>}
    </div>
  );
}

export default TweetCard