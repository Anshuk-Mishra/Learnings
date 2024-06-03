import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

function Header() {
  const [clicked, setClicked] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div className="bg-gray-600 text-gray-200 nav">
      <ul className="flex px-4 py-4 justify-evenly">
        <Link className="text-white text-lg">Little Lemons</Link>
        <div className="flex" id="elements">
          <button onClick={toggle} className={(clicked) ? 'btn mx-4 hide resiz' : 'btn mx-4 hide'}>
            {(clicked) ? <img src="../assets/close.png" alt="" /> : <img src="../assets/Hamburger.png" alt=""/>}
          </button>
          <Link to='/' className={(clicked) ? 'mx-4 keep' : 'mx-4 remove'}>Home</Link>
          <Link to='/cart' className={(clicked) ? 'mx-4 keep' : 'mx-4 remove'}>Cart</Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;
