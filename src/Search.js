import React from 'react';
import Buttons from './Buttons';
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
    <div>
      <div className='search-container'>
        <h1>Search</h1>
        <input placeholder='🔎' onChange={handleChange} />
      </div>
      <div>
        {renderSearch}
        <Buttons text='Previous' callBack={handlePrev} />
        <Buttons callBack={handleNext} />
      </div>
    </div>
  );
}


export default Search;