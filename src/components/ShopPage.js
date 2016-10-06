
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
      bowtiesArr.push(<GridList image={Data.bowties[key].image} 
                                name={Data.bowties[key].name} 
                                price={Data.bowties[key].price} 
                                object={Data.bowties[key]} 
                                key={Data.bowties[key].name}
                                />)
    }

    for(key in Data.neckies){
      neckiesArr.push(<GridList image={Data.neckies[key].image} 
                                name={Data.neckies[key].name} 
                                price={Data.neckies[key].price} 
                                object={Data.neckies[key]} 
                                objectName={'neckies'}
                                key={Data.neckies[key].name} 
                                />)
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
