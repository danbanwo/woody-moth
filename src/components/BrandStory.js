import React from 'react';
import ReactDOM from 'react-dom';
// var css = require('App.css')


var headStyle = {
  fontFamily:"newRoman",
  color:'hsl(57, 79%, 37%)',
  // color:"linear-gradient(blue,yellow)",
  borderStyle:'solid black ' ,
  borderWidth:5,
  borderColor:'orange',



};

var paraStyle = {
  fontFamily:"newRoman",
  fontSize:20,
  color:"black",
  backgroundSize: 900,
  backgroundRepeat: "no-Repeat",
  wordSpacing: 2,
    transform: "rotate(-3deg)",
    borderRadius:20

 };
var background ={
    backgroundImage:'url(http://static.wixstatic.com/media/120e3e_24b164636d158c4fcd64994d2f30596a.jpg_srz_1299_979_85_22_0.50_1.20_0.00_jpg_srz)',
    position: "relative",
    bottom: 50
};

 var imgStyle= {
  width:375,
  height:300,
  position: "relative",
  marginLeft:280,
  marginTop: -25,
  transform: "rotate(-20deg)",

 }
            
var BrandStory = React.createClass({
  render: function() {
    return (
      <div className>

          <div style={background}>
          </div>
        <center><h1 style={headStyle}>The Brand</h1></center>
        <hr style={{backgroundColor:'black'}}/ >
        <center><p style={paraStyle}> Woody Moth began in the summer of 2012. In the midst of a monumental wardrobe <br/>

crisis, I was attempting to transition from Bryan
Bethea Urban College Grad<br/>
 to Bryan

Bethea Young Professional. I dropped off hundreds in dollars worth of designer jeans<br/>


and designer T-shirts at the local Salvation Army and began the search for a more<br/>


professional, more clean cut, more cutting edge wardrobe.<br/>


The search for a new ensemble was not an easy one. Suit jackets and slacks were<br/>


plentiful, but the vast majority of professional wear available for retail lacked the sense<br/>


of flair that I value when choosing wardrobe pieces. Every piece that I would try on was<br/>


either too professional or too trendy; nothing in between.<br/>


One of the most monotone pieces of professional wear I came across was neckties.<br/>


While I loved the idea of the tie as a distinguishing accessory, I felt boxed in by the lack<br/>


of diversity as far as their design is concerned. Tired of leaving stores empty-handed, I<br/>


abandoned the search for ties and began pursuing watches instead.<br/>


I stumbled upon a very unique watch, which possessed all the fashionable flair<br/>
 I

had been searching for. The watch was made of wood. It was uniquely crafted; both<br/>


fashionable and functional. That's when the idea hit me! The wooden watch was exactly<br/>


what I had been looking for, so why not a wooden tie?<br/>


A friend of mine who does woodworking as a hobby agreed to create a wooden tie<br/>


prototype. I put the contraption on paper and eventually progressed throughout the<br/>


entire prototyping process. The end result was my first tie; the Woody Moth: Mothman<br/>


Classic model.

The creation of Woody Moth emerged from my personal quest to possess both<br/>


contemporary and unique men's accessories; with each Woody Moth creation I hope<br/>


to pass on the pride and the self-confidence I feel when wearing something both trendy<br/>


and professional in the same outfit.<br/>



<div>
	<center><br/><h1 style={headStyle}>The Moth</h1></center>
</div>


For centuries the moth has symbolized transformation and has been a symbol of<br/>


evolution. Even an insect as small as a moth shows us that change must<br/>
 take place


in order for living beings to evolve and reach their true <br/>
potential. Just as
 caterpillars


transform into moths, boys<br/>
 transform
into men and girls transform into women. </p></center>
      </div>
    )
  }

})

export default BrandStory;
