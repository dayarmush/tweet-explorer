import Buttons from "./Buttons";

function TweetCard({ singleTweet, isLoggedIn, handleLike }) {

  const { likes, tweet, id } = singleTweet;
  
    return (
    <div className="card">
      <p>{tweet}</p>
      <p><span className="likes">❤️ {likes}</span></p>
      {isLoggedIn && <Buttons text='Add to Liked' callBack={() => handleLike(id)}/>}
    </div>
  );
}

export default TweetCard