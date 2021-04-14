export interface TreeNestedProps {
  selectOnClick?: boolean
  selectedItemValue?: string | number
  expandedLevel?: number
  valueProperty?: string
  displayProperty?: string
  itemClickable?: Function
  itemControls?: (record: any) => React.ReactElement
}
