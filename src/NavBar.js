import { NavLink } from 'react-router-dom'

function NavBar() {
    return ( 
        <div className='header'>
          <NavLink to='/'>Homepage</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/newTweet'>New Tweet</NavLink>
          <NavLink to='/filter'>Filter</NavLink>
        </div>
     );
}

export default NavBar;