import SignUp from './SignUp'
import Buttons from './Buttons'
import NewTweet from './NewTweet'
import TweetCard from './TweetCard'
import { useEffect, useState } from 'react'

function Login({isLoggedIn, setIsLoggedIn, user, setUser, handleLike, setTweets, likedTweets, posted, setPosted}) {

  const [users, setUsers] = useState([])
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

  function handleSignUp() {
    console.log('sign up')
  }
  

  return ( 
    <div>
      {!isLoggedIn && 
        <input className="login" type="password" placeholder='Password'
        onChange={handleChange} value={userName}/>
      }

      {isLoggedIn ? 
        <Buttons text='Log Out' callBack={handleLogOut} styling='log-out'/> : 
        <>
          <Buttons text='Log In' callBack={handleLogin} styling='log-in'/>
          <Buttons text='Sign Up' styling='sign-up' />
        </>
      }

      <div>
       {!isLoggedIn && <SignUp />} 
      </div>

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