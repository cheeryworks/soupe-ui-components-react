import React, { useState } from 'react'

export interface AccordionProps {
  className?: string
  children: Array<React.ReactElement>
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const [ activeItemKey, setActiveItemKey ] = useState<String | Number | null>('')

  function getNewChild(child: React.ReactElement, index: number) {
    const key = child.key || String(index)

    const childProps = {
      key,
      itemKey: key,
      active: activeItemKey ? key === activeItemKey : child.props.active,
      onItemClick: (key: string | number | null) => {
        setActiveItemKey(key)
      }
    }

    return React.cloneElement(child, childProps)
  }

  function getItems() {
    const { children } = props
    return children.map(getNewChild)
  }

  return (
    <div className={ `soupe-ui-accordion ${ props.className }` }>
      { getItems() }
    </div>
  )
}

Accordion.defaultProps = {}

Accordion.propTypes = {}

export default Accordion