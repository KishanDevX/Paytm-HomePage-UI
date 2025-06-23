import React from 'react'

const Services = ({title, serItem, extBanner}) => {

  return (
    <section id='services'>
      <h4>{title}</h4>
      <div id="serviceGrid">
        {serItem.map((item, idx) => {
          return (
            <div className="serviceType" key={idx}>
            <div id="serveIcon">
              <img src={item.icon} />
            </div>
            <span>{item.name}</span>
          </div>
          )
        })}
        <div className="serviceType">
          <div id="serveIcon">
            <img src="src/assets/icons/ViewAll_Ic.avif" />
          </div>
          <span>View All Products</span>
        </div>
      </div>
      <a id="morePart">
        <img src={extBanner} />
      </a>
    </section>
  )
}

export default Services