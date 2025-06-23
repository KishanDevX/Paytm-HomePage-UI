import React from 'react'

const Options = () => {

  const optionList = [
    {
      icon: "src/assets/icons/payFlight.svg",
      label: "Flights"
    },
    {
      icon: "src/assets/icons/payBus.svg",
      label: "Bus"
    },
    {
      icon: "src/assets/icons/payTrain.svg",
      label: "Trains"
    },
    {
      icon: "src/assets/icons/payFlightSky.svg",
      label: "Intl. Flights"
    }
  ];

  return (
    <section id='options'>
        <ul>
            {optionList.map((option, index) => (
              <li key={index}>
                  <img src={option.icon} alt={option.label} />
                  <span>{option.label}</span>
              </li>
            ))}
        </ul>
    </section>
  )
}

export default Options