function TweetCard({ singleTweet }) {
    const { likes, tweet } = singleTweet

    return (
        <div>
            <p>{tweet}</p>
        </div>
    )
}

export default TweetCard