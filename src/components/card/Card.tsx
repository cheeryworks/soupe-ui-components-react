import React from 'react'
import PropTypes from 'prop-types'

export interface CardProps {
  className?: string
  children: Array<React.ReactElement>
}

const Card: React.FC<CardProps> = (props) => {
  function getNewChild(child: React.ReactElement, index: number) {
    const key = child.key || String(index)

    const childProps = {
      key
    }

    return React.cloneElement(child, childProps)
  }

  function getItems() {
    const { children } = props
    return children.map(getNewChild)
  }

  return (
    <div className={ `soupe-ui-card panel hero hero-body px-0 py-0 ${ props.className }` }>
      { getItems() }
    </div>
  )
}

Card.defaultProps = {}

Card.propTypes = {
  className: PropTypes.string
}

export default Card