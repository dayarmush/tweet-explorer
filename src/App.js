import Filter from "./Filter";
import Search from "./Search";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";
import Homepage from "./Homepage";
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

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
    if (slice[1] === parseInt(tweets.length)) {
      return alert('Error: No more pages')
    } else {
      setSlice(prev => prev.map(pre => pre += 100))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const handlePrev = () => {
      if (slice[0] === 0) {
      alert('Error: Can only go Next')
    } else {
      setSlice(prev => prev.map(pre => pre -= 100))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="App">
      <NavBar setSlice={setSlice}/>
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
