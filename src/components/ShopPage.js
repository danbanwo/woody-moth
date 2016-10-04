import React from 'react';
import Data from '../data';
import GridList from './GridList';


var ShopPage = React.createClass({
  getInitialState () {
    return {allData:Data, bowties:[], neckies:[]}
  },

  componentWillMount() {
    var bowtiesArr = []
    var neckiesArr = []

    for(var key in Data.bowties){
      bowtiesArr.push(<GridList image={Data.bowties[key].image} />)
    }
    for(var key in Data.neckies){
      neckiesArr.push(<GridList image={Data.neckies[key].image} />)
    }

    this.setState({bowties: bowtiesArr, neckties: neckiesArr})

  },

  render: function() {
    return (
      <div className="row">
           <div className="col-lg-12">
               <h1 className="page-header">Thumbnail Gallery</h1>
               {this.state.bowties}
               {this.state.neckties}
           </div>

      </div>
    )
  }

})

export default ShopPage;
