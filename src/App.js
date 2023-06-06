import Filter from "./Filter";
import Search from "./Search";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import React, { useState, useEffect} from "react";

function App() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/twitter')
    .then(resp => resp.json())
    .then(tweetData => setTweets(tweetData))
  }, [])

  const topTweets = tweets.slice(0, 100)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/Search' element={<Search />} />   
        <Route path='Filter' element={<Filter tweets={tweets}/>} />
        <Route path='/newTweet' element={<NewTweet />} />
        <Route exact path='/' element={<Homepage topTweets={topTweets} setTweets={setTweets} /> } />
      </Routes>
    </div>
  );
}

export default App;
