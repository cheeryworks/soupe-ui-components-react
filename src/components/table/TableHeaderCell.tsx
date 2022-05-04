import React from 'react'

export interface TableHeaderCellProps {
  children?: React.ReactNode
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = (props) => {
  return (
    <div className="soupe-ui-table-header-cell">
      <div className="soupe-ui-table-header-cell-content">
        { props.children }
      </div>
    </div>
  )
}

TableHeaderCell.defaultProps = {}

TableHeaderCell.propTypes = {}

export default TableHeaderCell
