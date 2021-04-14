import React, { useEffect, useState } from 'react'
import { renderRecords } from './TreeUtil'
import RecordUtil from '../../utils/RecordUtil'
import { TreeNestedProps } from './TreeNestedProps'

export interface TreeItemProps extends TreeNestedProps {
  record: any
  level: number
  selectedItemValues?: Array<string | number>
  onItemClick?: (record: any) => void
}

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const [ selected, setSelected ] = useState<boolean>(false)
  const [ expanded, setExpanded ] = useState<boolean>(false)
  const [ hovered, setHovered ] = useState<boolean>(false)

  const [ arrowClass, setArrowClass ] = useState<string>('')

  function expend() {
    if (!props.record.leaf) {
      if (expanded) {
        setExpanded(false)
      } else {
        setExpanded(true)
      }
    }
  }

  function handleClick() {
    if (props.onItemClick) {
      props.onItemClick(props.record)
    }

    if (props.itemClickable && props.itemClickable(props.record)) {
      setSelected(true)
    }
  }

  function renderItemControls() {
    if (props.itemControls) {
      return props.itemControls(props.record)
    }
  }

  useEffect(() => {
    let currentValue = RecordUtil.getRecordValue(
      props.record,
      props.valueProperty
    )

    if (currentValue === props.selectedItemValue) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [ props.record, props.valueProperty, props.selectedItemValue ])

  useEffect(() => {
    if (props.record.children) {
      if (expanded) {
        setArrowClass('fa-caret-down')
      } else {
        setArrowClass('fa-caret-right')
      }
    } else {
      setArrowClass('')
    }
  }, [ props.expandedLevel, props.level, props.record, expanded ])

  useEffect(() => {
      if (props.expandedLevel && props.expandedLevel >= 0 && props.level >= props.expandedLevel) {
        setExpanded(false)
      } else {
        setExpanded(true)
      }
    },
    // eslint-disable-next-line
    []
  )

  return (
    <div className="soupe-ui-tree-item">
      <div
        className={ `soupe-ui-tree-item-current${ selected ? ' active' : '' }` }
        style={ { paddingLeft: 15 * props.level } }
        onMouseLeave={ () => {
          setHovered(false)
        } }
        onMouseOver={ () => {
          setHovered(true)
        } }
      >
        <div className="columns is-gapless is-vcentered">
          <div onClick={ () => expend() } className="column is-narrow soupe-ui-tree-item-arrow">
            <span className="icon">
              <i className={ `fas ${ arrowClass }` }></i>
            </span>
          </div>
          <div onClick={ () => handleClick() } className="column soupe-ui-tree-item-name">
            <div className={ `${ props.itemClickable && !props.itemClickable(props.record) ? 'text-muted' : '' }` }>
              { RecordUtil.getRecordDisplayName(props.record, props.displayProperty) }
            </div>
          </div>
          {
            hovered &&
            <div className="column is-narrow soupe-ui-tree-item-controls">
              { renderItemControls() }
            </div>
          }
        </div>
      </div>
      {
        props.record.children && expanded &&
        <div className="soupe-ui-tree-item-children">
          { renderRecords(props.record.children, props, props.level + 1, props.onItemClick) }
        </div>
      }
    </div>
  )
}

TreeItem.defaultProps = {
  level: 0
}

TreeItem.propTypes = {}

export default TreeItem
