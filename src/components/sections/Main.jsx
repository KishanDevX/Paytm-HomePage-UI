import React from 'react'
import Options from './Options'
import MainCard from '../cards/MainCard'
import OfferBanner from './OfferBanner'
import Services from './Services'
import PromoCard from '../cards/PromoCard'
import ButtonPrime from '../common/ButtonPrime'
import MiniPromo from '../cards/MiniPromo'

const Main = () => {

  const itemGroup1 = [
      { name: 'Mobile Recharge', icon: 'src/assets/icons/MoRechIc.avif' },
      { name: 'FASTag Recharge', icon: 'src/assets/icons/FaRechIc.avif' },
      { name: 'DTH Recharge', icon: 'src/assets/icons/DtRechIc.png' },
    ]
  
    const itemGroup2 = [
      { name: 'Electricity Bill', icon: 'src/assets/icons/elecBill_Ic.avif'},
      { name: 'LIC / Insurance', icon: 'src/assets/icons/licIns_Ic.avif'},
      { name: 'Pay Loan EMI', icon: 'src/assets/icons/payL_Ic.png'},
    ]
  
    const firstPage = {
      pLogo: 'src/assets/logos/paytmLogo.svg',
      pLogoWidth: '16rem',
      pTitle: 'Pay anyone directly from your bank account.',
      pDesc: 'Pay anyone, dolor sit amet consectetur adipisicing elit. Quam obcaecati delectu officia praesentium quasi itaque iure, debitis ipsam, optio, totam magni distinctio deleniti? Ab eaque voluptatibus, quae dolor from anywhere.',
      pBtns: (
          <>
              <div id="playStore">
                  <img src="src/assets/banners/appStore.avif" />
              </div>
              <div id="appStore">
                  <img src="src/assets/banners/playStore.avif" />
              </div>
          </>
      ),
      pImage: 'src/assets/banners/promoBan1.avif'
    }
  
    const secondPage = {
      pLogo: 'src/assets/logos/Page2_Logo.webp',
      pLogoWidth: '12.8rem',
      pTitle: 'Build Long-term Wealth & Achhive your Goals.',
      pDesc: 'Investing on Lorem ipsum dolor, incidunt deleniti, totam id accusamus suscipit veritatis cum quaerat eaque iure quae voluptatum? Assumenda, your dreams',
      pBtns: (<ButtonPrime btnTxt='Learn More' />),
      pImage: 'src/assets/banners/promoBan2.avif'
    }
  
    const thirdPage = {
      pLogo: 'src/assets/logos/page3_Logo.png',
      pLogoWidth: '14.5rem',
      pTitle: 'One destination for Credit Cards',
      pDesc: 'Paytm HDFC, Lorem ipsumam quaerat eaque iure quae voluptatum? Assumenda, incredible offers.',
      pBtns: (
        <div id='thirdBtnPart'>
          <ButtonPrime btnTxt='Apply Now' />
          <div id="imgBtn">
            <img src="src/assets/banners/page2Banner.avif"/>
          </div>
        </div>
      ),
      pImage: 'src/assets/banners/promoBan3.avif'
    }
  
    const fourthPage = {
      pLogo: 'src/assets/logos/page4_Logo.png',
      pLogoWidth: '14rem',
      pTitle: 'Insurance made easy.',
      pDesc: 'Buying insurance, eaque iure quae voluptatum Assumenda, voluptatum? Assumenda, Lorem ipsumam iure quaerat eaque iure quae voluptatum Assumenda, & easy-to-understand.',
      pBtns: (<ButtonPrime btnTxt='Get it Now' />),
      pImage: 'src/assets/banners/promoBan4.avif'
    }
  
    const fifthPage = {
      pLogo: 'src/assets/logos/page5_Logo.png',
      pLogoWidth: '8rem',
      pTitle: 'Accept payment online & offline.',
      pDesc: 'Millions of eaque iure quae voluptatum Assumenda, voluptatum? Assumenda, Lorem ipsumam iure quaerat eaque iure quae of merchants',
      pBtns: (<ButtonPrime btnTxt='Learn More' />),
      pImage: 'src/assets/banners/promoBan5.avif'
    }
  
  return (
    <main>
        <Options />
        <MainCard />
        <OfferBanner />
        <Services title={'Recharges'} serItem={itemGroup1} extBanner={'src/assets/banners/sparkPhone.avif'} />
        <Services title={'Bill Payments'} serItem={itemGroup2} extBanner={'src/assets/banners/routeBanner.avif'} />
        <PromoCard promData={firstPage} />
        <PromoCard promData={secondPage} />
        <MiniPromo />
        <PromoCard promData={thirdPage} />
        <PromoCard promData={fourthPage} />
        <PromoCard promData={fifthPage} />
    </main>
  )
}

export default Main