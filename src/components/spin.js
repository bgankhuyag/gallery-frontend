import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Spin = ({
  size = 24,
  color = "#0096c7"
}) => {
  return (
    <FontAwesomeIcon icon={faSpinner} className="spin" style={{ fontSize: size, color: color }} />
  )
}

export default Spin
