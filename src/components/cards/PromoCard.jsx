import React from 'react'

const PromoCard = ({promData}) => {

  return (
    <section id='promoCard'>
        <div id="promoLogo"  style={{ width: promData.pLogoWidth }}>
            <img src={promData.pLogo} />
        </div>
        <div id="promoTitle">
            <h5>{promData.pTitle}</h5>
        </div>
        <div id="promoDesc">
            <p>{promData.pDesc}</p>
        </div>
        <div id="promoBtns">{promData.pBtns}</div>
        <div id="promoImg">
            <img src={promData.pImage} />
        </div>
    </section>
  )
}

export default PromoCard