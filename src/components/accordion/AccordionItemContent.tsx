import React from 'react'

export interface AccordionItemContentProps {
  active?: boolean,
  height?: number,
  children?: React.ReactNode
}

const AccordionItemContent: React.FC<AccordionItemContentProps> = (props) => {
  if (props.active) {
    return (
      <div
        style={ { height: props.height } }
        className="hero-body soupe-ui-accordion-item-content"
      >
        { props.children }
      </div>
    )
  } else {
    return (<div></div>)
  }
}

AccordionItemContent.defaultProps = {}

AccordionItemContent.propTypes = {}

export default AccordionItemContent
