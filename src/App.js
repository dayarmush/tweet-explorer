import Login from "./Login";
import Filter from "./Filter";
import Search from "./Search";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";
import Homepage from "./Homepage";
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [user, setUser] = useState([])
  const [search, setSearch] = useState("")
  const [tweets, setTweets] = useState([])
  const [slice, setSlice] = useState([0, 100])
  const [likedTweets, setLikedTweets] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  function handleLike(id) {
    setLikedTweets(pre => {
      const updatedLikedTweets = [...pre, ...tweets.filter(tweet => tweet.id === id)];
      setTimeout(() => {
        fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'content-Type' : 'application/json'
        },
        body: JSON.stringify({'tweets': updatedLikedTweets})
        })
      }, 2000);
      return updatedLikedTweets;
    })
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
              isLoggedIn={isLoggedIn}
              handleLike={handleLike}
              setTweets={setTweets}
            />
          }/>

          <Route path='/Filter' element={
            <Filter
              tweets={tweets}
              slice={slice}
              handleNext={handleNext}
              handlePrev={handlePrev}
              isLoggedIn={isLoggedIn}
              handleLike={handleLike}
              setTweets={setTweets}
            /> 
          }/>

          <Route path='/login' element={
            <Login 
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLike={handleLike}
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
              isLoggedIn={isLoggedIn}
              handleLike={handleLike}
            />
          }/>
        </Routes>
      </div>
    </div>
  );
}
  
  export default App;
