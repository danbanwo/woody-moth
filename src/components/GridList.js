import React from 'react';
import {Link} from 'react-router';

var GridList = React.createClass({
  render: function() {
  	console.log(this.props.object.product)
    return (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
          <Link to={"/shop/" + this.props.object.category + '/' + this.props.object.product} className="thumbnail">
          		<img className="img-responsive" src={this.props.image} alt="" />
          </Link>
          <div className="well">
	      <Link to={"/shop/" + this.props.object.category + '/' + this.props.object.product} className="thumbnail">
	      		<h4 key={this.key}>{this.props.name}</h4>
	          	<h4 key={this.key}>{this.props.price}</h4>
	      </Link>
	      </div>
      </div>
    )
  }
})

export default GridList;
