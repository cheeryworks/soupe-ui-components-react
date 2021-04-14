import TreeItem from './TreeItem'
import { TreeNestedProps } from './TreeNestedProps'

export function renderRecords(
  records: Array<any>, nestedProps: TreeNestedProps, level: number,
  onItemClick?: (record: any) => void) {
  if (records != null && records.length > 0) {
    return (
      records.map((record) =>
        <TreeItem
          key={ record.id }
          { ...nestedProps }
          onItemClick={ onItemClick }
          record={ record }
          level={ level }
        />
      )
    )
  }
}
