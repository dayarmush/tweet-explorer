import React from 'react';
import TweetCard from "./TweetCard";

function Search({setSearch, tweets, search, slice, handleNext, handlePrev}) {
  
  function handleChange(event) {
    setSearch(event.target.value)
  } 

  const filteredTweets = tweets.filter(tweet => {
    return tweet.tweet.toLowerCase().includes(search.toLowerCase())
  })

  const renderSearch = filteredTweets.slice(slice[0], slice[1]).map(tweet => {
    return <TweetCard key={tweet.id} singleTweet={tweet} />
  })

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} />
        <h1>Search</h1>
        {renderSearch}
      </div>
      <div>
        <button onClick={handleNext}>Previous</button>
        <button onClick={handlePrev}>Next</button>
      </div>
    </div>
  );
}


export default Search;