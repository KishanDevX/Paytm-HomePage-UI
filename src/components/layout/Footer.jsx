import React from 'react'

const Footer = () => {

  const socList = [
    "ri-facebook-fill", 
    "ri-twitter-x-fill",
    "ri-youtube-fill",
    "ri-linkedin-fill",
    "ri-instagram-fill"
  ]
  
  return (
    <footer>
        <div id="copy">
            <span>&copy; 2025 Paytm</span>
        </div>
        <div id="social">
            <span>Follow us</span>
            <div id="socGrid">
                {socList.map((icon, idx) => {
                    return (
                        <i className={icon} key={idx}></i>
                    )
                })}
            </div>
        </div>
    </footer>
  )
}

export default Footer