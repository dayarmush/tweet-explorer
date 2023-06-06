function TweetCard({ singleTweet }) {
    
    const { likes, tweet } = singleTweet

    return (
        <div className="card">
            <p>{tweet}</p>
            <h3 className="card-likes">♥️ {likes}</h3>
        </div> 
    )
}

export default TweetCard