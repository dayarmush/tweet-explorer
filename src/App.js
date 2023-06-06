import Filter from "./Filter";
import Search from "./Search";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import React, { useState, useEffect} from "react";

function App() {
  let counter = 0

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/twitter')
    .then(resp => resp.json())
    .then(tweetData => setTweets(tweetData))
  }, [])

  const withId = tweets.map(tweet => {
    return {'keyword': tweet.keyword, 'tweet': tweet.tweet, 'likes': tweet.likes , 'id': counter++}
  })

  const topTweets = tweets.slice(0, 100)

  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Routes>
          <Route path='/Search' element={<Search />} />   
          <Route path='Filter' element={<Filter tweets={tweets}/>} />
          <Route path='/newTweet' element={<NewTweet />} />
          <Route exact path='/' element={<Homepage topTweets={topTweets} setTweets={setTweets} /> } />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
