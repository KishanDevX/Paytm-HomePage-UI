import React, { useState } from 'react'

const MainCard = () => {

  const availOptions = [
    {head: 'Armed Forces', desk: 'Up to ₹600 off'},
    {head: 'Student', desk: 'Extra Baggage'},
    {head: 'Senior Citizen', desk: 'Up to ₹600 off'}
  ]

  return (
        <section id='mainCard'>
          <div id="toggle">
            <div id="opt1">One Way</div>
            <div id="opt2">Round Trip</div>
          </div>
          <div id="converter">
            <div id="from">
              <span>From</span>
              <span className='country'>DEL</span>
              <span>Delhi</span>
            </div>
            <div id="convIcon">
              <img src="src/assets/icons/converterIcon.png" />
            </div>
            <div id="to">
              <span>To</span>
              <span className='country'>BOM</span>
              <span>Mumbai</span>
            </div>
          </div>
          <div id="secondLayer">
            <div id="date">
              <span>Departure Date</span>
              <span>Wed, 11 Jun 25</span>
            </div>
            <div id="toggleReturn">
              <span>Save more on Roundtrip</span>
              <span>+ Add Return</span>
            </div>
          </div>
          <div id="thirdLayer">
            <span id='deskTitle'>Travellers and cabin class</span>
            <div id='infoText'>
              <span>1 Adult</span>
              <span id='bull'>&bull;</span>
              <span>Economy</span>
            </div>
          </div>
          <div id="fourthLayer">
            <div id="headings-4">
              <span>Special Flares (optional)</span>
              <div id='head2'>
                <div id="monIc">
                  <img src="src/assets/icons/moneyIcon-g.png" />
                </div>
                <span>Extra Savings</span>
              </div>
            </div>
            <div id="scrollParent">
              {availOptions.map((elem, idx) => {
                return (
                  <div className="scrollElem" key={idx}>
                    <span className='optHead'>{elem.head}</span>
                    <span className='optDesk'>{elem.desk}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <button id='triggerSearch'>Search Flights</button>
        </section>
  )
}

export default MainCard