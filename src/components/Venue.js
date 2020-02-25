import React, { Component } from 'react'
import './Venue.css'
// import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';


const IMAGES =
[{
    original: "../images/map.jpg",
    thumbnail: "../images/map.jpg",
    
},
{
    original: "../images/header_3.jpeg",
    thumbnail: "../images/header_3.jpeg",

},
{
    original: "../images/header_4.jpg",
    thumbnail: "../images/header_4.jpg"
},
{
    original: "../images/header_5.jpg",
    thumbnail: "../images/header_5.jpg"
},
{
    original: "../images/lake.jpg",
    thumbnail: "../images/lake.jpg"
},
{
    original: "../images/tipi.jpg",
    thumbnail: "../images/tipi.jpg"
},
]

class Venue extends Component {


  render() {
    return (
      <div className={"venue"}>
          <img src="../images/venue.png" alt="" className="titleImg" />
          <div className={"venueSection"}>
            <div className="gallery">
                <div id="gallery" >
                    <ImageGallery items={IMAGES} autoPlay={true} showThumbnails={false} slideDuration={6000} showNav={false}/>
                </div>
            </div>
            <div className={"text"}>
                <h2>Camp Chief Hector</h2>
                <h3>Friday, May 21 - Monday, May 24, 2021</h3>
                <p>
                    Camp Chief Hector is a summer camp located in Exshaw, Canada in the heart of the Canadian Rockies. It is approximately a one hour drive from the Calgary International Airport, and within short driving distance to scenic Banff, Lake Louise, and Canmore.
                </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Venue
