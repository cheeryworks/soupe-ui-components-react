import React from 'react'
import PropTypes from 'prop-types'

export interface TagProps {
  className?: string
  selected?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <span className={ `soupe-ui-tag tag ${ props.className }` }>
      { props.children }
      { props.selected && <button className="delete is-small"></button> }
    </span>
  )
}

Tag.defaultProps = {
  selected: false
}

Tag.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Tag