import React from 'react'

export interface CardHeaderProps {
  children?: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return (
    <div className="hero-head panel-heading soupe-ui-card-header">
      { props.children }
    </div>
  )
}

CardHeader.defaultProps = {}

CardHeader.propTypes = {}

export default CardHeader
