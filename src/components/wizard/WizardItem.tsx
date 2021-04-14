import React from 'react'

export interface WizardItemProps {
  itemKey?: string | number,
  onItemClick?: (key?: string | number) => void
  active?: boolean
  width?: number,
  isLast?: boolean
}

const WizardItem: React.FC<WizardItemProps> = (props) => {
  function handleItemClick() {
    const { onItemClick } = props

    if (typeof onItemClick === 'function') {
      onItemClick(props.itemKey)
    }
  }

  return (
    <div
      style={ { width: props.width } }
      onClick={ () => handleItemClick() }
      className="soupe-ui-wizard-item column columns is-vcentered is-gapless my-0"
    >
      {/* eslint-disable-next-line */ }
      <a className={ `column ${ props.active ? 'active' : '' }` }>{ props.children }</a>
      {
        /* eslint-disable-next-line */
        !props.isLast && <a className="column is-narrow">
          <i className="fas fa-angle-right"></i>
        </a>
      }
    </div>
  )
}

WizardItem.defaultProps = {}

WizardItem.propTypes = {}

export default WizardItem