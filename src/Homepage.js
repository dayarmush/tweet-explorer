import Buttons from "./Buttons"
import TweetCard from "./TweetCard"

function Homepage ({ tweets, handleNext, handlePrev, slice, isLoggedIn, handleLike, setTweets }) {

  const tweetCopy = [...tweets]
  const sortedTweets = tweetCopy.sort((a, b) => b.likes - a.likes)
  const topTweets = sortedTweets.slice(slice[0], slice[1])

  return(
    <div>
      {topTweets.map((tweet) => {
        return <TweetCard 
                key={tweet.id} 
                singleTweet={tweet} 
                isLoggedIn={isLoggedIn} 
                handleLike={handleLike}
                tweets={tweets}
                setTweets={setTweets}
              />
      })}
      <div>
        <Buttons text="Previous" callBack={handlePrev} />
        <Buttons callBack={handleNext} />
      </div>
    </div>
    )
}

export default Homepage