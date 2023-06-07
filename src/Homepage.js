import TweetCard from "./TweetCard"

function Homepage ({ tweets, keyword, likes, tweet, handleNext, handlePrev, slice }) {

  const sortedTweets = tweets.sort((a, b) => b.likes - a.likes)
  const topTweets = sortedTweets.slice(slice[0], slice[1])

  return(
    <div>
      {topTweets.map((tweet) => {
        return <TweetCard key={tweet.id} singleTweet={tweet} />
      })}
      <div>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Previous</button>
      </div>
    </div>
    )
}

export default Homepage