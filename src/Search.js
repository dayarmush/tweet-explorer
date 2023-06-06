import React from 'react';
import TweetCard from "./TweetCard";

let counter = 0

function Search({setSearch, tweets, search}) {
    function handleChange(event) {
        setSearch(event.target.value)
      } 

      const filteredTweets = tweets.slice(0, 500).filter(tweet => {
        return tweet.tweet.toLowerCase().includes(search.toLowerCase()
        )
      })
       
      return (
            <div className="ui search">
              <div className="ui icon input">
                <input className="prompt" onChange={handleChange} />
                <i className="search icon" />
                <h1>Search</h1>
               {filteredTweets.slice(0, 100).map(tweet => {
                return <TweetCard key={counter++} singleTweet={tweet} />
                })}
              </div>
              <div>
                
              </div>
            </div>
          );
      }


export default Search;