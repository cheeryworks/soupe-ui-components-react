import React from 'react'

export interface AccordionItemTitleProps {
  active?: boolean,
  alert?: string | number
  children?: React.ReactNode
}

const AccordionItemTitle: React.FC<AccordionItemTitleProps> = (props) => {
  return (
    <div className={ `soupe-ui-accordion-item-title hero-head px-3 py-3${ props.active ? ' is-active' : '' }` }>
      <div className="columns">
        <div className="column">
          { props.children && <span>{ props.children }</span> }
        </div>
        <div className="column is-narrow">
          {
            (props.alert || props.alert === 0) &&
            <span className="tag is-rounded is-danger">{ props.alert }</span>
          }
        </div>
        <div className="column is-narrow">
        <span className="icon">
          <i className={ `fas ${ props.active ? 'fa-angle-down' : 'fa-angle-right' }` }></i>
        </span>
        </div>
      </div>
    </div>
  )
}

AccordionItemTitle.defaultProps = {}

AccordionItemTitle.propTypes = {}

export default AccordionItemTitle
