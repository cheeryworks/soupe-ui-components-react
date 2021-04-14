import React from 'react'
import PropTypes from 'prop-types'

export interface AccordionItemProps {
  itemKey?: string | number,
  onItemClick?: (key?: string | number) => void
  active?: boolean
  children: Array<React.ReactElement>
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  function handleItemClick() {
    const { onItemClick } = props

    if (typeof onItemClick === 'function') {
      onItemClick(props.itemKey)
    }
  }

  function getNewChild(child: React.ReactElement, index: number) {
    const key = child.key || String(index)

    const childProps = {
      key,
      active: props.active
    }

    return React.cloneElement(child, childProps)
  }

  function getItems() {
    const { children } = props
    return children.map(getNewChild)
  }

  return (
    <div onClick={ () => handleItemClick() }
      className={ `soupe-ui-accordion-item hero${ props.active ? ' is-active' : '' }` }>
      { getItems() }
    </div>
  )
}

AccordionItem.defaultProps = {}

AccordionItem.propTypes = {
  onItemClick: PropTypes.func,
  active: PropTypes.bool
}

export default AccordionItem