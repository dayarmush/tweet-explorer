import { NavLink } from 'react-router-dom'

function NavBar({ setSlice }) {
  return ( 
    <div className='header'>
      <NavLink to='/' onClick={() => setSlice([0, 100])}>Homepage</NavLink>
      <NavLink to='/search' onClick={() => setSlice([0, 100])}>Search</NavLink>
      <NavLink to='/filter'onClick={() => setSlice([0, 100])}>Filter</NavLink>
      <NavLink to='/login'onClick={() => setSlice([0, 100])}>Login</NavLink>
    </div>
  );
}

export default NavBar;