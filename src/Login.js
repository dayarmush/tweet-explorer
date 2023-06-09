import Buttons from './Buttons'
import TweetCard from './TweetCard'
import NewTweet from './NewTweet'
import { useEffect, useState } from 'react'

function Login({isLoggedIn, setIsLoggedIn, user, setUser, handleLike, setTweets, likedTweets}) {

  const [users, setUsers] = useState([])
  const [posted, setPosted] = useState([])
  const [userName, setUsername] = useState('')

  let renderLikedTweets
  let renderPostedTweets

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(r => r.json())
    .then(usersData => setUsers(usersData))
  }, [])

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleLogin() {
    users.forEach(user => {
      if (user.username === userName) {
        setUser(user)
        setUsername('')
        setIsLoggedIn(pre => !pre)
      }
    })
  }

  function handleLogOut() {
    setUser([])
    setIsLoggedIn(pre => !pre)
  }

  if (user.tweets) {
     renderLikedTweets = likedTweets.map(tweet => {
      return <TweetCard 
        key={tweet.id}
        singleTweet={tweet} 
        isLoggedIn={isLoggedIn} 
        handleLike={handleLike}
      />
    })
  }

  if (posted) {
    renderPostedTweets = posted.map(post => {
      return <TweetCard 
        key={post.id}
        singleTweet={post} 
        isLoggedIn={isLoggedIn} 
        handleLike={handleLike}
      />
    })
  }
  

  return ( 
    <div>
      {!isLoggedIn && 
        <input className="login" type="text" 
        onChange={handleChange} value={userName}/>
      }

      {isLoggedIn ? 
        <Buttons text='Log Out' callBack={handleLogOut} styling='log-out'/> : 
        <Buttons text='Log In' callBack={handleLogin} />
      }

      {isLoggedIn && <NewTweet setTweets={setTweets} setPosted={setPosted}/>}

      <div className='container'>
        <div className='section'>
          {isLoggedIn && <h3>Liked Tweets</h3>}
          {isLoggedIn && renderLikedTweets}
        </div>
        <div className='section'>
          {isLoggedIn && <h3>Posted Tweets</h3>}
          {isLoggedIn && renderPostedTweets}
        </div>
      </div>
    </div>  
  );
}

export default Login;