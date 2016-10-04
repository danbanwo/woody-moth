import React from 'react';
import {Link, IndexLink} from 'react-router';

var Grids = React.createClass({
  render: function() {

    return (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
          <a className="thumbnail" href="#">
              <img className="img-responsive" src={this.props.image} alt="" />
          </a>
      </div>
    )
  }
})

export default Grids;
