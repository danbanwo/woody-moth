'use strict'
 
import React from 'react'
import {ApSlideshow, ApSpinnerStyle, ApSlideshowStyle} from 'apeman-react-slideshow'


var imgStyle = {
	display:"inline",
	position:"relative",
	borderRadius:10,
	right: -650,
	top:-15
}
var imgBack={
 backgroundImage: 'url( http://wallpaperwarrior.com/wp-content/uploads/2016/07/Wood-Wallpaper-3.jpg )',
backgroundColor:'gold'  

}	
 
const LookBookPage = React.createClass({
  render () {
    return (
      <div style={imgBack}>
     			<div style={imgStyle}>
			        <ApSlideshowStyle style={{borderRadius:20}} />
			        <ApSlideshow images={[
			                    'http://i.imgur.com/7p2qzE1.jpg',
			                    'http://i.imgur.com/4xjionq.jpg',
			                    'http://i.imgur.com/7p2qzE1.jpg',
			                    './images/03.jpg',
			                    './images/04.jpg',
			                    './images/05.jpg',
			                    './images/06.jpg',
			                    './images/07.jpg'
			                ]}	

			                     repeat={ true }
			                     height={ 600 }
			                     interval={100000}
			                     width={ 400 }
			                     style={
			                     	{borderRadius: 50},
			                     	{dispaly:'inline-block'}
			                     }
			        />
			
		   
		   		</div>
		   		<div >
			        <ApSlideshowStyle />
			        <ApSlideshow images={[
			                    'http://i.imgur.com/7p2qzE1.jpg',
			                    './images/01.jpg',
			                    'http://i.imgur.com/7p2qzE1.jpg',
			                    './images/03.jpg',
			                    './images/04.jpg',
			                    './images/05.jpg',
			                    './images/06.jpg',
			                    './images/07.jpg'
			                ]}
			                     repeat={ true }
			                     height={ 600 }
			                     width={ 400 }
			                     style={
			                     	{borderRadius: 30},
			                     	{display:'inline-block'}
			                     }
			        />
			 	</div>
		

      </div>


    )
  }
})
 

export default LookBookPage