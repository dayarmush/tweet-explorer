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

  const topTweets = tweets.slice(0, 100)
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Routes>
          <Route path='/Search' element={<Search setSearch={setSearch} tweets={tweets} search={search} />} />
          <Route path='/Filter' element={<Filter  tweets={tweets}/>} />
          <Route path='/newTweet' element={<NewTweet tweets={tweets} setTweets={setTweets}/>} />
          <Route exact path='/' element={<Homepage 
          tweets={tweets} 
          setTweets={setTweets} 
          keyword={tweets.keyword} 
          likes={tweets.likes} 
          tweet={tweets.tweet} 
        />} />
        </Routes>
      </div>
      
    </div>
  );
}
  
  export default App;
