import TweetCard from "./TweetCard"

function Homepage ({ tweets, keyword, likes, tweet }) {

    const sortedTweets = tweets.sort((a, b) => b.likes - a.likes)
    const topTweets = sortedTweets.slice(0, 100)
    
    let counter = 0

    return(
        <div>
            {topTweets.map((tweet) => {
                return <TweetCard key={counter++} singleTweet={tweet} />})}
        </div>
    )
}

export default Homepage