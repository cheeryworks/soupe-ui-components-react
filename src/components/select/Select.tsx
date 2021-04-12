import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import RecordUtil from '../../utils/RecordUtil'

export interface Option {
}

export interface SelectProps {
  options?: Array<Option>
  value?: Object
  readonly?: boolean
  customizedName?: string
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
}

const Select: React.FC<SelectProps> = (props) => {
  const [ name, setName ] = useState<String>('')

  const dropDownRef = React.createRef<HTMLDivElement>()

  function open(props: SelectProps) {
    if (props.readonly) {
      return
    }

    if (dropDownRef.current) {
      dropDownRef.current.classList.add('is-active')
    }
  }

  function close() {
    if (dropDownRef.current) {
      dropDownRef.current.classList.remove('is-active')
    }
  }

  function select(props: SelectProps, option: Option, isClick: boolean) {
    if (!props.optionClickable || !props.optionClickable(option)) {
      return
    }

    if (option) {
      setName(RecordUtil.getRecordDisplayName(option, props.displayProperty))

      if (!props.readonly) {
        if (props.onChange) {
          props.onChange(RecordUtil.getRecordValue(option, props.valueProperty))
        }

        if (props.onSelect) {
          props.onSelect(option, isClick)
        }

        if (props.closeOnClick) {
          close()
        }
      }
    }
  }

  function renderName(option: Option, displayProperty?: string) {
    return RecordUtil.getRecordDisplayName(option, displayProperty)
  }

  function renderOptions(props: SelectProps) {
    if (props.options != null && props.options.length > 0) {
      return (
        props.options.map((option) =>
          <button
            key={ RecordUtil.getRecordValue(option, props.valueProperty) }
            style={ { width: props.optionWidth } }
            onClick={ () => {
              select(props, option, true)
            } }
            className={ `dropdown-item button is-white ${ (props.optionClickable && !props.optionClickable(option)) ? 'text-muted' : '' }` }>
            {
              renderName(option, props.displayProperty)
            }
          </button>
        )
      )
    } else {
      return (
        props.children
      )
    }
  }

  useEffect(() => {
    if (props.customizedName) {
      setName(props.customizedName)
    }
  }, [ props.customizedName ])

  useEffect(() => {
      function initValue() {
        if (props.options && props.options.length > 0) {
          let currentOption = null

          if (props.autoSelect) {
            currentOption = props.options[0]
          }

          if (props.value) {
            for (let option of props.options) {
              let currentValue =
                RecordUtil.getRecordValue(option, props.valueProperty) + ''

              if (currentValue === props.value + '') {
                currentOption = option
                break
              }
            }
          }

          if (currentOption) {
            select(props, currentOption, false)
          }
        }
      }

      initValue()
    },
    // eslint-disable-next-line
    []
  )

  return (
    <div
      style={ { width: props.width } }
      className='soupe-ui-select columns is-gapless is-vcentered mx-0 my-0'>
      {
        props.leftLabel &&
        <div className='soupe-ui-select-label column is-narrow'><label>{ props.leftLabel }</label></div>
      }
      <div className='soupe-ui-select-options dropdown column' ref={ dropDownRef }>
        <div className='dropdown-trigger'>
          <button
            aria-controls='id'
            style={ { width: props.optionWidth } }
            onClick={ () => {
              open(props)
            } }
            aria-haspopup='true'
            className='button columns is-gapless'>
            <div className="column has-text-left">{ name }</div>
            {
              !props.readonly &&
              <div className="column is-narrow icon is-small">
                <i aria-hidden="true" className="fas fa-angle-down"></i>
              </div>
            }
          </button>
        </div>
        <div
          style={ {
            width: props.optionWidth,
            maxHeight: props.optionHeight ? props.optionHeight : 'auto'
          } }
          className="dropdown-menu"
          role="menu">
          <div className="dropdown-content">
            { renderOptions(props) }
          </div>
        </div>
      </div>
      {
        props.leftLabel &&
        <div className="soupe-ui-select-label column is-narrow">
          <label>{ props.rightLabel }</label>
        </div>
      }
    </div>
  )
}

Select.defaultProps = {
  autoSelect: true,
  closeOnClick: true,
  optionWidth: '100%',
  optionClickable: function (option: Option) {
    if (option) {
      return true
    }
  }
}

Select.propTypes = {
  width: PropTypes.string,
  optionWidth: PropTypes.string,
  leftLabel: PropTypes.string
}

export default Select