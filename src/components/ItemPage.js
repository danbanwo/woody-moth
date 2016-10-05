import React from 'react';
import Data from '../data';


var ItemPage = React.createClass({

 	render: function() {
 			let url = Data[this.props.params.object][this.props.params.objectname]
    return (
      <div className>
      	<h1>{url.name}</h1>
        <h3>{url.info}</h3>
        <img src={url.image} alt="" />
        <h3>{url.price}</h3>
      </div>
    )
  }

})

export default ItemPage;
 