import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
return (
<nav>
<Link to="/profile">Profile</Link>
<Link to="/workouthistory">Workout History</Link>
<Link to='/'>Workout Log</Link>
</nav>
)}

export default Navbar