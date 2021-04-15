import React, { useEffect, useRef, useState } from 'react'
import Select from '../select/Select'
import Tree from '../tree/Tree'
import RecordUtil from '../../utils/RecordUtil'
import { useTranslation } from 'react-i18next'

export interface TreeSelectProps {
  options: Array<any>
  value?: any
  readonly?: boolean
  width?: string
  optionWidth?: string
  optionHeight?: string
  autoSelect?: boolean
  closeOnClick?: boolean
  leftLabel?: string
  rightLabel?: string
  valueProperty?: string
  displayProperty?: string
  optionClickable?: Function
  children?: React.ReactNode
  onChange?: Function
  onSelect?: Function
  expandedLevel?: number
  itemClickable?: Function
  selectedItemValue?: string | number
}

const TreeSelect: React.FC<TreeSelectProps> = (props) => {
  const { t } = useTranslation()

  const [ name, setName ] = useState<string>()
  const [ value, setValue ] = useState<any>()

  const childRef = useRef<any>()

  function handleItemSelected(record: any) {
    setName(RecordUtil.getRecordDisplayName(record, props.displayProperty))
    setValue(RecordUtil.getRecordValue(record, props.valueProperty))

    if (childRef.current) {
      childRef.current.close()
    }
  }

  function getOption(options: Array<any>) {
    if (props.value) {
      if (options && options.length > 0) {
        for (let option of options) {
          let currentValue = RecordUtil.getRecordValue(
            option,
            props.valueProperty
          )

          if (currentValue + '' === props.value + '') {
            return option
          }

          if (option.children && option.children.length > 0) {
            let childOption: any = getOption(option.children)

            if (childOption) {
              return childOption
            }
          }
        }
      }
    }

    return null
  }

  useEffect(() => {
      let option = null

      if (props.value) {
        option = getOption(props.options)
      }

      if (!option && !props.value && props.autoSelect) {
        if (props.options && props.options.length > 0) {
          option = props.options[0]
        }
      }

      if (option) {
        setValue(RecordUtil.getRecordValue(props.options[0], props.valueProperty))
        setName(RecordUtil.getRecordDisplayName(props.options[0], props.displayProperty))
      } else {
        setValue(null)
        setName(t('soupe.ui.components.select.options.empty'))
      }
    },
    // eslint-disable-next-line
    []
  )

  return (
    <Select
      ref={ childRef }
      closeOnClick={ props.closeOnClick }
      customizedName={ name }
      value={ value }
      leftLabel={ props.leftLabel }
      rightLabel={ props.rightLabel }
      readonly={ props.readonly }
      width={ props.width }>
      <Tree
        autoSelect={ false }
        expandedLevel={ props.expandedLevel }
        itemClickable={ props.itemClickable }
        records={ props.options }
        selectedItemValue={ value }
        onItemSelected={ (record) => handleItemSelected(record) }>
      </Tree>
    </Select>
  )
}

TreeSelect.defaultProps = {
  autoSelect: true
}

TreeSelect.propTypes = {}

export default TreeSelect