import React from 'react'

export interface CardContentProps {

}

const CardContent: React.FC<CardContentProps> = (props) => {
  return (
    <div className="hero-body px-0 py-0">
      { props.children }
    </div>
  )
}

CardContent.defaultProps = {}

CardContent.propTypes = {}

export default CardContent