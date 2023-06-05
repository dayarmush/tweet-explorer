import TweetCard from "./TweetCard"

function Homepage ({ topTweets }) {

    let counter = 0

    return(
        <div>
            {topTweets.map((tweet) => {
                return <TweetCard key={counter++} singleTweet={tweet} />})}
        </div>
    )
}

export default Homepage