import Buttons from './Buttons'
import TweetCard from './TweetCard'
import NewTweet from './NewTweet'
import { useEffect, useState } from 'react'

function Login({isLoggedIn, setIsLoggedIn, user, setUser, handleLike, setTweets}) {

  const [users, setUsers] = useState([])
  const [userName, setUsername] = useState('')

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

  // const likedTweets = user.tweets[0].map(tweet => console.log(tweet))
  if (user.tweets) console.log(user.tweets)

  return ( 
    <div>
      {!isLoggedIn && 
        <input className="login" type="text" 
        onChange={handleChange} value={userName}/>
      }

      {isLoggedIn ? 
        <Buttons text='Log Out' callBack={handleLogOut} /> : 
        <Buttons text='Log In' callBack={handleLogin} />
      }

      {isLoggedIn && <NewTweet setTweets={setTweets}/>}

      {/* don't forget to map */}
      {isLoggedIn && 
        user.tweets && 
        <TweetCard 
          singleTweet={user.tweets} 
          isLoggedIn={isLoggedIn} 
          handleLike={handleLike}
        />
      }
    </div>  
  );
}

export default Login;