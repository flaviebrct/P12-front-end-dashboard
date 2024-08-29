import React from 'react'

import "../style/components/navButtons.css"

export default function NavButton(props) {
  return (
    <button className='nav-button'>
      <img src={props.sport} alt={props.sportName} />
    </button>
  )
}
