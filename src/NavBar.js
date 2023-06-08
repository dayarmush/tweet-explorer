import { NavLink } from 'react-router-dom'

function NavBar({ setSlice }) {
    return ( 
        <div className='header'>
          <NavLink to='/' onClick={() => setSlice([0, 100])}>Homepage</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/filter'>Filter</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/newTweet'>New Tweet</NavLink>
        </div>
     );
}

export default NavBar;