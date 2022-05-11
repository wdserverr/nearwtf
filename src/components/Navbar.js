import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
		{/* <div class="left">
			<a href="#">Animal Navbar</a>
		</div> */}
  <div className="mid">
      <Link className='dogs' to="/">Market</Link>
      <Link className='cats' to="/cats">Token</Link>
      <Link className='sheeps' to="/sheeps">Activity</Link>
      <Link className='goats' to="/goats">Publication</Link>
  </div>
	{/* <div class="right">
          <a href="#">Welcome</a>
        </div> */}

    </header>
  );
}
export default Navbar;