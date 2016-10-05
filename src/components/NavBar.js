import React from 'react';
import {Link, IndexLink} from 'react-router';

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-fixed-top navStuff navbar-lg ">
        <i className="hidden-xs-down col-xl-5 navbar-brand App-logo"><img className="logoImage" src="http://i.imgur.com/LYNQmL3.png" alt="Woody logo" /></i>
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li className="nav-item"><Link to="/shop" activeClassName="active" >Shop</Link></li>
            <li className="nav-item"><Link to="/brand" activeClassName="active">Brand Story</Link></li>
            <li className="nav-item"><Link to="/sale" activeClassName="active">Sale</Link></li>
            <li className="nav-item"><Link to="/look" activeClassName="active">Look Book</Link></li>
          </ul>
        </div>

      </nav>
    )
  }
})

export default NavBar;
