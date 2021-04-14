import React, { useState } from 'react'

export interface WizardProps {
  className?: string
  children: Array<React.ReactElement>
}

const Wizard: React.FC<WizardProps> = (props) => {
  const [ activeItemKey, setActiveItemKey ] = useState<String | Number | null>('')

  function getNewChild(child: React.ReactElement, index: number) {
    const key = child.key || String(index)

    const childProps = {
      key,
      itemKey: key,
      active: activeItemKey ? key === activeItemKey : child.props.active,
      isLast: index === (props.children.length - 1),
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
    <div className={ `soupe-ui-wizard columns is-vcentered is-gapless px-2 py-2 ${ props.className }` }>
      { getItems() }
    </div>
  )
}

Wizard.defaultProps = {}

Wizard.propTypes = {}

export default Wizard