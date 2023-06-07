import Filter from "./Filter";
import Search from "./Search";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import React, { useState, useEffect} from "react";

function App() {

  const [search, setSearch] = useState("")
  const [tweets, setTweets] = useState([])
  const [slice, setSlice] = useState([0, 100])

  useEffect(() => {
    fetch('http://localhost:3000/twitter')
    .then(resp => resp.json())
    .then(tweetData => setTweets(tweetData.slice(0, 300)))
  }, [])
  
  const handleNext = () => {
    slice[0] && setSlice(prev => prev.map(pre => pre += 100))
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handlePrev = () => {
    slice[0] && setSlice(prev => prev.map(pre => pre -= 100))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }

  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Routes>

          <Route path='/Search' element={
            <Search 
              setSearch={setSearch} 
              tweets={tweets} 
              search={search}
              slice={slice}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          }/>

          <Route path='/Filter' element={
            <Filter
              tweets={tweets}
              slice={slice}
              handleNext={handleNext}
              handlePrev={handlePrev}
            /> 
          }/>

          <Route path='/newTweet' element={
            <NewTweet 
              tweets={tweets} 
              setTweets={setTweets}
            />}
          />

          <Route exact path='/' element={
            <Homepage 
              tweets={tweets} 
              setTweets={setTweets} 
              keyword={tweets.keyword} 
              likes={tweets.likes} 
              tweet={tweets.tweet} 
              handleNext={handleNext}
              handlePrev={handlePrev}
              slice={slice}
            />
          }/>
        </Routes>
      </div>
      
    </div>
  );
}
  
  export default App;
