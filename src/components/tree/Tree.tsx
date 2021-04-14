import React, { useEffect, useState } from 'react'
import { renderRecords } from './TreeUtil'
import RecordUtil from '../../utils/RecordUtil'
import { TreeNestedProps } from './TreeNestedProps'

export interface TreeProps extends TreeNestedProps {
  autoSelect?: boolean
  records: Array<any>
}

const Tree: React.FC<TreeProps> = (props) => {
  const [ selectedItemValue, setSelectedItemValue ] = useState<string | number>()

  const nestedProps = {
    selectedItemValue: selectedItemValue,
    expandedLevel: props.expandedLevel,
    valueProperty: props.valueProperty,
    displayProperty: props.displayProperty,
    itemClickable: props.itemClickable,
    itemControls: props.itemControls
  } as TreeNestedProps

  function handleItemClick(record: any) {
    setSelectedItemValue(RecordUtil.getRecordValue(record, props.valueProperty))
  }

  useEffect(() => {
      if (!props.selectedItemValue && props.autoSelect && props.records && props.records.length > 0) {
        setSelectedItemValue(RecordUtil.getRecordValue(props.records[0], props.valueProperty))
      }
    },
    // eslint-disable-next-line
    []
  )

  return (
    <div className="soupe-ui-tree">
      { renderRecords(props.records, nestedProps, 0, handleItemClick) }
    </div>
  )
}

Tree.defaultProps = {
  autoSelect: true,
  selectOnClick: true,
  expandedLevel: 0,
  itemClickable() {
    return true
  }
}

Tree.propTypes = {}

export default Tree