import React from 'react'

export interface CardProps {

}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>Card</div>
  )
}

Card.defaultProps = {}

Card.propTypes = {}

export default Card