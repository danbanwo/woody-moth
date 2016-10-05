import React from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer-basic-centered navbar-bottom">

			<p className="footer-company-motto">The company motto.</p>

			<p className="footer-links">
				<a href="#">Warrenty</a>
				<br/>
				<a href="#">Faq</a>
        <br/>
				<a href="#">Contact</a>
			</p>

			<p className="footer-company-name">Company Name &copy; 2015</p>

		</footer>
    )
  }
})

export default Footer;
