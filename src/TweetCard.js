import './TweetCard.css'

function TweetCard({ singleTweet }) {
    const { likes, tweet } = singleTweet;
  
    return (
      <div className="card">
        <p>{tweet}</p>
        <p><span className="likes">❤️ {likes}</span></p>
      </div>
    );
  }

export default TweetCard