import React from 'react'

const MiniPromo = () => {
  return (
    <section id='miniPromo'>
        <div id="left">
            <div id="miniLogo">
                <img src="src/assets/icons/roundLogoPaytm.png"/>
            </div>
            <div id="miniTxt">
                <span>24 &times; 7 Trusted customer</span>
                <span>support to assist and help you</span>
            </div>
        </div>
        <div id="miniBtn">
            <span>Learn More</span>
            <i className="ri-arrow-right-line"></i>
        </div>
    </section>
  )
}

export default MiniPromo