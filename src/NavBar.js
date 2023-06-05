import { NavLink } from 'react-router-dom'

function NavBar() {
    return ( 
        <>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/newTweet'>New Tweet</NavLink>
          <NavLink to='/filter'>Filter</NavLink>
        </>
     );
}

export default NavBar;