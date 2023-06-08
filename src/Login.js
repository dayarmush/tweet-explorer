import Buttons from './Buttons'
import TweetCard from './TweetCard'
import { useEffect, useState } from 'react'

function Login() {

  const [user, setUser] = useState([])
  const [users, setUsers] = useState([])
  const [userName, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  return ( 
    <div>
      {!isLoggedIn && <input className="login" type="text" onChange={handleChange} value={userName}/>}
      {isLoggedIn ? <Buttons text='Log Out' callBack={handleLogOut} /> : <Buttons text='Log In' callBack={handleLogin} />}
      {/* don't forget to map */}
      {isLoggedIn && user.tweets && <TweetCard singleTweet={user.tweets[0]} isLoggedIn={isLoggedIn}/>}
    </div>  
  );
}

export default Login;