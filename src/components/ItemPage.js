import React from 'react';
import Data from '../data';


var ItemPage = React.createClass({

 	render: function() {
 			let url = Data[this.props.params.object][this.props.params.objectname]
    return (
      <div className>
      	<h1>{url.name}</h1>
        <h4>{url.info}</h4>
        <img src={url.image} alt="" />
        <h4>{url.price}</h4>
      </div>
    )
  }

})

export default ItemPage;
 