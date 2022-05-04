import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from '../select/Select'
import TableHeaderCell from './TableHeaderCell'

export interface TableProps {
  columns: Array<any>
  fixedLeftColumns?: number
  fixedRightColumns?: number
  records: Array<any>
  selectionConfigs?: any
  className?: string
  pageSizeInBottom?: boolean
  paging?: boolean
  page?: number
  size?: number
  autoHeight?: boolean
  border?: boolean
  headerCenter?: boolean
  operations?: Array<React.ReactElement>
  onPageSizeChange?: (pageSize: number) => void
  total?: number
  totalPage?: number
  footer?: Array<any>
  emptyMessage?: Array<React.ReactElement>,
  children?: React.ReactNode
}

const Table: React.FC<TableProps> = (props) => {
  const { t } = useTranslation()

  const [ fixed, setFixed ] = useState<boolean>(false)
  const [ bodyScrollableV, setBodyScrollableV ] = useState<boolean>(false)
  const [ bodyScrollLeft, setBodyScrollLeft ] = useState<number>(0)
  const [ bodyScrollTop, setBodyScrollTop ] = useState<number>(0)
  const [ columnsWidth, setColumnsWidth ] = useState<number>(0)
  const [ autoColumns, setAutoColumns ] = useState<number>(0)
  const [ widthOfBodyCenter, setWidthOfBodyCenter ] = useState<number>(0)
  const pageSizes = [ 20, 50, 100 ]

  const tableRef = React.createRef<HTMLDivElement>()

  function changePageSize(pageSize: number) {
    if (props.paging && pageSize + '' !== props.size + '') {
      // this.$cookie.set('page_size', pageSize)

      if (props.onPageSizeChange) {
        props.onPageSizeChange(pageSize)
      }
    }
  }

  function prevPage() {
    if (props.page && props.page > 1) {
      // this.$emit('page-changed', this.page - 1, this.size)
    }
  }

  function nextPage() {
    if (props.page && props.totalPage && props.page < props.totalPage) {
      // this.$emit('page-changed', this.page + 1, this.size)
    }
  }

  function startNumber() {
    if (props.total && props.total > 0 && props.page && props.size) {
      return (props.page - 1) * props.size + 1
    } else {
      return 1
    }
  }

  function endNumber() {
    if (props.page === props.totalPage) {
      return props.total
    } else if (props.page && props.size) {
      return props.page * props.size
    }
  }

  function hasLeftFixedColumns() {
    return props.fixedLeftColumns && props.fixedLeftColumns > 0
  }

  function hasRightFixedColumns() {
    return props.fixedRightColumns && props.fixedRightColumns > 0
  }

  function rowsInLeftHeader() {
    if (props.columns && props.columns.length > 0) {
      let start = 0
      let end = props.fixedLeftColumns ? props.fixedLeftColumns - 1 : 0

      return getRowsInHeader(start, end)
    } else {
      return []
    }
  }

  function rowsInCenterHeader() {
    if (props.columns && props.columns.length > 0) {
      let start = props.fixedLeftColumns ? props.fixedLeftColumns : 0
      let end = props.fixedRightColumns
        ? props.columns.length - props.fixedRightColumns - 1
        : props.columns.length - 1

      return getRowsInHeader(start, end)
    } else {
      return []
    }
  }

  function rowsInRightHeader() {
    if (props.columns && props.columns.length > 0) {
      let start = props.fixedRightColumns
        ? props.columns.length - props.fixedRightColumns
        : props.columns.length - 1
      let end = props.columns.length - 1

      return getRowsInHeader(start, end)
    } else {
      return []
    }
  }

  function columnsInLeftBody() {
    if (props.columns && props.columns.length > 0) {
      let start = 0
      let end = props.fixedLeftColumns ? props.fixedLeftColumns - 1 : 0

      return getColumnsInBody(start, end, props.columns)
    } else {
      return []
    }
  }

  function columnsInCenterBody() {
    if (props.columns && props.columns.length > 0) {
      let start = props.fixedLeftColumns ? props.fixedLeftColumns : 0
      let end = props.fixedRightColumns
        ? props.columns.length - props.fixedRightColumns - 1
        : props.columns.length - 1

      return getColumnsInBody(start, end, props.columns)
    } else {
      return []
    }
  }

  function columnsInRightBody() {
    if (props.columns && props.columns.length > 0) {
      let start = props.fixedRightColumns
        ? props.columns.length - props.fixedRightColumns
        : props.columns.length - 1
      let end = props.columns.length - 1

      return getColumnsInBody(start, end, props.columns)
    } else {
      return []
    }
  }

  function internalCheckingAll(event: any) {
    let checked = event.target.checked

    if (props.selectionConfigs && props.records) {
      if (props.selectionConfigs.checkingAll) {
        props.selectionConfigs.checkingAll(checked, props.records)
      } else {
        checkingAll(checked, props.records)
      }
    }
  }

  function checkingAll(checked: boolean, records: any) {
    // for (let record of records) {
    // this.$set(record, 'checked', checked)
    // }
  }

  function checkedAll() {
    if (props.selectionConfigs && props.records && props.records.length > 0) {
      for (let record of props.records) {
        if (!isChecked(record)) {
          return false
        }
      }

      return true
    } else {
      return false
    }
  }

  function isChecked(record: any) {
    if (props.selectionConfigs && props.selectionConfigs.isChecked) {
      return props.selectionConfigs.isChecked(record)
    }

    return record.checked
  }

  function isWindows() {
    return navigator.platform.indexOf('Win') > -1
  }

  function getColumnsInBody(start: number, end: number, columns: any): any {
    let columnsInCenter = []
    if (start >= 0 && end >= 0 && columns && columns.length >= 1) {
      for (let i = start; i <= end; i++) {
        if (columns[i].columns && columns[i].columns.length > 0) {
          let childColumnsInCenter = getColumnsInBody(
            0,
            columns[i].columns.length - 1,
            columns[i].columns
          )

          if (childColumnsInCenter && childColumnsInCenter.length > 0) {
            for (let childColumnInCenter of childColumnsInCenter) {
              columnsInCenter.push(childColumnInCenter)
            }
          }
        } else {
          columnsInCenter.push(columns[i])
        }
      }
    }

    return columnsInCenter
  }

  function getRowsInHeader(start: number, end: number) {
    let maxDepthOfHeader = getMaxDepthOfHeader(props.columns)

    let rows = []

    for (let i = 0; i < maxDepthOfHeader; i++) {
      rows.push([])
    }

    internalGetRowsInHeader(
      start,
      end,
      rows,
      props.columns,
      1,
      maxDepthOfHeader
    )

    return rows
  }

  function internalGetRowsInHeader(start: number, end: number, rows: any, columns: any, depth: number, maxDepth: number) {
    if (start >= 0 && end >= 0 && columns && columns.length >= 1) {
      for (let i = start; i <= end; i++) {
        let rowSpan =
          maxDepth -
          depth -
          getMaxDepthOfHeader(columns[i].columns) +
          1
        let colSpan = getMaxWidthOfHeader(columns[i].columns)

        rows[depth - 1].push({
          title: columns[i].title,
          width: columns[i].width,
          classes: columns[i].classes,
          rowSpan: rowSpan,
          colSpan: colSpan
        })

        if (columns[i].columns && columns[i].columns.length > 0) {
          internalGetRowsInHeader(
            0,
            columns[i].columns.length - 1,
            rows,
            columns[i].columns,
            depth + 1 + rowSpan - 1,
            maxDepth
          )
        }
      }
    }
  }

  function getMaxDepthOfHeader(columns: any) {
    let maxDepth = 0

    if (columns && columns.length > 0) {
      let depths = []
      for (let column of columns) {
        let depth = 1

        if (column.columns && column.columns.length > 0) {
          depth += getMaxDepthOfHeader(column.columns)
        }

        depths.push(depth)
      }

      for (let currentDepth of depths) {
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth
        }
      }
    }

    return maxDepth
  }

  function getMaxWidthOfHeader(columns: any) {
    let maxWidth = 1

    if (columns && columns.length > 0) {
      maxWidth = columns.length

      let columnWidths = []

      for (let column of columns) {
        columnWidths.push(getMaxWidthOfHeader(column.columns))
      }

      let currentWidth = 0

      for (let columnWidth of columnWidths) {
        currentWidth += columnWidth
      }

      if (currentWidth > maxWidth) {
        maxWidth = currentWidth
      }
    }

    return maxWidth
  }

  function isLastColumnInRow(columns: any, rowIndex: number, columnIndex: number, totalColumns: number) {
    let lengthOfColumns = columns.length

    if (columns[0] && columns[0].colSpan) {
      lengthOfColumns = 0

      for (let column of columns) {
        lengthOfColumns += column.colSpan
      }
    }

    if (
      columnIndex === columns.length - 1 &&
      lengthOfColumns === totalColumns
    ) {
      return true
    }

    return false
  }

  function autoColumnWidth() {
    if (widthOfBodyCenter - columnsWidth > autoColumns * 100) {
      let totalRemainWidth = widthOfBodyCenter - columnsWidth

      if (props.selectionConfigs && props.selectionConfigs.multipleSelect) {
        totalRemainWidth = totalRemainWidth - 40
      }

      if (!bodyScrollableV && isWindows()) {
        totalRemainWidth = totalRemainWidth - 1
      }

      return totalRemainWidth / autoColumns
    }

    return 100
  }

  function onCheck(event: any, record: any) {
    // this.$emit(
    //   'record-checking',
    //   event.target.checked,
    //   record,
    //   this.records
    // )
  }

  useEffect(() => {
    if (!props.autoHeight
      && ((props.fixedLeftColumns && props.fixedLeftColumns > 0)
        || (props.fixedRightColumns && props.fixedRightColumns > 0))) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }, [ props.autoHeight, props.fixedLeftColumns, props.fixedRightColumns ])

  useLayoutEffect(() => {
    if (tableRef.current) {
      const tableHeaderCenter = tableRef.current.querySelector('.soupe-ui-table-header-center')

      if (tableHeaderCenter) {
        tableHeaderCenter.scrollLeft = bodyScrollLeft
      }

      const tableHeaderFooter = tableRef.current.querySelector('.soupe-ui-table-header-footer')

      if (tableHeaderFooter) {
        tableHeaderFooter.scrollLeft = bodyScrollLeft
      }
    }
  }, [ tableRef, bodyScrollLeft ])

  useLayoutEffect(() => {
    if (tableRef.current) {
      const tableBodyLeft = tableRef.current.querySelector('.soupe-ui-table-body-left')

      if (tableBodyLeft) {
        tableBodyLeft.scrollTop = bodyScrollTop
      }

      const tableBodyRight = tableRef.current.querySelector('.soupe-ui-table-body-right')

      if (tableBodyRight) {
        tableBodyRight.scrollTop = bodyScrollTop
      }
    }
  }, [ tableRef, bodyScrollTop ])

  useEffect(() => {
      function getWidthOfColumns(start: number, end: number, columns: any) {
        let widthAndAutoColumns = {
          width: 0,
          columns: 0
        }

        if (start >= 0 && end >= 0 && columns && columns.length >= 1) {
          for (let i = start; i <= end; i++) {
            if (columns[i].columns && columns[i].columns.length > 0) {
              let currentWidthAndAutoColumns = getWidthOfColumns(
                0,
                columns[i].columns.length - 1,
                columns[i].columns
              )

              widthAndAutoColumns.width += currentWidthAndAutoColumns.width
              widthAndAutoColumns.columns += currentWidthAndAutoColumns.columns
            } else if (columns[i].width) {
              widthAndAutoColumns.width += columns[i].width
            } else {
              widthAndAutoColumns.columns += 1
            }
          }
        }

        return widthAndAutoColumns
      }

      function setAutoWidthOfColumn() {
        if (props.columns && props.columns.length > 0) {
          let start = props.fixedLeftColumns ? props.fixedLeftColumns : 0
          let end = props.fixedRightColumns
            ? props.columns.length - props.fixedRightColumns - 1
            : props.columns.length - 1

          let widthAndAutoColumns = getWidthOfColumns(
            start,
            end,
            props.columns
          )

          setColumnsWidth(widthAndAutoColumns.width)
          setAutoColumns(widthAndAutoColumns.columns)
        }
      }

      if (tableRef.current) {
        const tableBodyCenter = tableRef.current.querySelector('.soupe-ui-table-body-center')

        if (tableBodyCenter) {
          tableBodyCenter.addEventListener('scroll', function (event: any) {
            setBodyScrollLeft(event.target.scrollLeft)
            setBodyScrollTop(event.target.scrollTop)
          })
        }
      }

      function updateLayout() {
        if (tableRef.current) {
          const tableBodyCenter = tableRef.current.querySelector('.soupe-ui-table-body-center')
          const tableBodyCenterTable = tableRef.current.querySelector('.soupe-ui-table-body-center table')

          if (tableBodyCenter && tableBodyCenterTable) {
            if (tableBodyCenterTable.clientHeight > tableBodyCenter.clientHeight - 2) {
              setBodyScrollableV(true)
            } else {
              setBodyScrollableV(false)
            }

            setWidthOfBodyCenter(tableBodyCenter.clientWidth)
          }
        }
      }

      updateLayout()

      window.addEventListener('resize', function () {
        updateLayout()
      })

      setAutoWidthOfColumn()
    },
    // eslint-disable-next-line
    []
  )

  return (
    <div className={ `hero ${ props.className }` }>
      <div
        ref={ tableRef }
        className={ `soupe-ui-table hero${ !props.autoHeight ? ' hero-body px-0 py-0' : '' }${ props.border ? ' soupe-ui-table-border' : '' }${ fixed ? ' soupe-ui-table-fixed' : '' }${ props.headerCenter ? ' soupe-ui-table-header-centralized' : '' }` }
      >
        <div className="hero-head pagination-top">
          {
            ((props.paging && !props.pageSizeInBottom) || props.operations) &&
            <div className="columns is-gapless is-vcentered mx-0 my-0 mb-2">
              {
                props.paging && !props.pageSizeInBottom &&
                <div className="column is-narrow">
                  <Select
                    leftLabel={ t('soupe.ui.components.table.pagination_page_sizes_left_label') }
                    options={ pageSizes }
                    rightLabel={ t('soupe.ui.components.table.pagination_page_sizes_right_label') }
                    value="size"
                    onSelect={ (option) => changePageSize(option) }
                  />
                </div>
              }
              {
                props.operations &&
                <div className="column">
                  <div className="operations has-text-right">
                    {
                      props.operations
                    }
                  </div>
                </div>
              }
            </div>
          }
        </div>
        <div className="hero-body px-0 py-0 soupe-ui-table-content hero">
          <div
            className="hero-head soupe-ui-table-header columns is-gapless mx-0 my-0 has-background-primary"
          >
            {
              hasLeftFixedColumns() &&
              <div className="column is-narrow soupe-ui-table-header-left columns is-gapless mx-0 my-0 overflow-hidden">
                <table className="column table">
                  {
                    props.selectionConfigs &&
                    props.selectionConfigs.multipleSelect &&
                    props.fixedLeftColumns && props.fixedLeftColumns >= 1 &&
                    <colgroup>
                      <col className="soupe-ui-table-checkbox-column"/>
                    </colgroup>
                  }
                  {
                    columnsInLeftBody().map((column: any, i: number) => {
                      return (
                        <colgroup key={ i }>
                          <col style={ { width: column.width } }/>
                        </colgroup>
                      )
                    })
                  }
                  <thead>
                  {
                    rowsInLeftHeader().map((rowInHeader, i) => {
                      return (
                        <tr key={ i }>
                          {
                            props.selectionConfigs &&
                            props.selectionConfigs.multipleSelect &&
                            props.fixedLeftColumns && props.fixedLeftColumns >= 1 &&
                            i === 0 &&
                            <th
                              rowSpan={ rowsInLeftHeader.length }
                              className="soupe-ui-table-checkbox-column"
                            >
                              <TableHeaderCell>
                                {
                                  props.selectionConfigs.selectAll &&
                                  <input
                                    defaultChecked={ checkedAll() }
                                    onClick={ (event) => internalCheckingAll(event) }
                                    type="checkbox"
                                  />
                                }
                              </TableHeaderCell>
                            </th>
                          }
                          {
                            rowInHeader.map((columnInHeader: any, j) => {
                              return (
                                <th
                                  key={ j }
                                  colSpan={ columnInHeader.colSpan }
                                  rowSpan={ columnInHeader.rowSpan }
                                  className={ `${ columnInHeader.classes }${ isLastColumnInRow(rowInHeader, i, j, columnsInLeftBody.length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                >
                                  <TableHeaderCell>
                                    { columnInHeader.title ? columnInHeader.title : '&nbsp;' }
                                  </TableHeaderCell>
                                </th>
                              )
                            })
                          }
                          <th>X</th>
                        </tr>
                      )
                    })
                  }
                  </thead>
                </table>
              </div>
            }
            <div
              className="column soupe-ui-table-header-center columns is-gapless mx-0 my-0 overflow-x-hidden"
            >
              <table className="column table">
                {
                  props.selectionConfigs &&
                  props.selectionConfigs.multipleSelect &&
                  props.fixedLeftColumns && props.fixedLeftColumns < 1 &&
                  <colgroup>
                    <col className="soupe-ui-table-checkbox-column"/>
                  </colgroup>
                }
                {
                  columnsInCenterBody().map((column: any, i: number) => {
                    return (
                      <colgroup key={ i }>
                        <col
                          style={ {
                            width: column.width
                              ? column.width
                              : autoColumnWidth()
                          } }
                        />
                      </colgroup>
                    )
                  })
                }
                {
                  bodyScrollableV &&
                  <colgroup>
                    <col style={ { width: 100 } }/>
                  </colgroup>
                }
                <thead>
                {
                  rowsInCenterHeader().map((rowInHeader, i) => {
                    return (
                      <tr
                        key={ i }
                      >
                        {
                          props.selectionConfigs &&
                          props.selectionConfigs.multipleSelect &&
                          props.fixedLeftColumns && props.fixedLeftColumns < 1 &&
                          <th
                            rowSpan={ rowsInCenterHeader.length }
                            className="soupe-ui-table-checkbox-column"
                          >
                            <TableHeaderCell>
                              {
                                props.selectionConfigs.selectAll &&
                                <input
                                  checked={ checkedAll() }
                                  onClick={ (event) => internalCheckingAll(event) }
                                  type="checkbox"
                                  v-if="selectionConfigs.selectAll"
                                />
                              }
                            </TableHeaderCell>
                          </th>
                        }
                        {
                          rowInHeader.map((columnInHeader: any, j) => {
                            return (
                              <th
                                colSpan={ columnInHeader.colSpan }
                                key={ j }
                                rowSpan={ columnInHeader.rowSpan }
                                className={ `${ columnInHeader.classes }${ isLastColumnInRow(rowInHeader, i, j, columnsInCenterBody().length) ? ' soupe-ui-table-no-right-border soupe-ui-table-header-no-right-border' : '' }` }
                              >
                                <TableHeaderCell>
                                  { columnInHeader.title ? columnInHeader.title : '&nbsp;' }
                                </TableHeaderCell>
                              </th>
                            )
                          })
                        }
                        {
                          bodyScrollableV &&
                          <th style={ { textOverflow: 'clip' } }>
                            &nbsp;
                          </th>
                        }
                      </tr>
                    )
                  })
                }
                </thead>
              </table>
            </div>
            {
              hasRightFixedColumns() &&
              <div
                className="column is-narrow soupe-ui-table-header-right columns is-gapless mx-0 my-0"
                v-if="hasRightFixedColumns"
              >
                <table className="column table is-striped">
                  {
                    columnsInRightBody().map((column: any, i: number) => {
                      return (
                        <colgroup key={ i }>
                          <col style={ { width: column.width } }/>
                        </colgroup>
                      )
                    })
                  }
                  <thead>
                  {
                    rowsInRightHeader().map((rowInHeader, i) => {
                      return (
                        <tr
                          key={ i }
                        >
                          {
                            rowInHeader.map((columnInHeader: any, j) => {
                              return (
                                <th
                                  key={ j }
                                  colSpan={ columnInHeader.colSpan }
                                  rowSpan={ columnInHeader.rowSpan }
                                  className={ `${ columnInHeader.classes }${ isLastColumnInRow(rowInHeader, i, j, columnsInRightBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                >
                                  <TableHeaderCell>
                                    { columnInHeader.title ? columnInHeader.title : '&nbsp;' }
                                  </TableHeaderCell>
                                </th>
                              )
                            })
                          }
                          <th>X</th>
                        </tr>
                      )
                    })
                  }
                  </thead>
                </table>
              </div>
            }
          </div>
          <div
            className="hero-body px-0 py-0 soupe-ui-table-body columns is-gapless mx-0 my-0"
          >
            {
              hasLeftFixedColumns() &&
              <div
                className="column is-narrow soupe-ui-table-body-left columns is-gapless overflow-y-hidden mx-0 my-0"
              >
                <table
                  className={ `column table is-striped${ bodyScrollableV ? ' soupe-ui-table-scroll' : '' }` }
                >
                  {
                    props.selectionConfigs &&
                    props.selectionConfigs.multipleSelect &&
                    props.fixedLeftColumns && props.fixedLeftColumns >= 1 &&
                    <colgroup>
                      <col className="soupe-ui-table-checkbox-column"/>
                    </colgroup>
                  }
                  {
                    columnsInLeftBody().map((column: any, i: number) => {
                      return (
                        <colgroup
                          key={ i }
                        >
                          <col style={ { width: column.width } }/>
                        </colgroup>
                      )
                    })
                  }
                  <tbody>
                  {
                    props.records.map((record, i) => {
                      return (
                        <tr
                          key={ i }
                        >
                          {
                            props.selectionConfigs &&
                            props.selectionConfigs.multipleSelect &&
                            props.fixedLeftColumns && props.fixedLeftColumns >= 1 &&
                            <td
                              className="soupe-ui-table-checkbox-column"
                            >
                              <input
                                defaultChecked={ isChecked(record) }
                                onClick={ (event) => onCheck(event, record) }
                                type="checkbox"
                              />
                            </td>
                          }
                          {
                            columnsInLeftBody().map((column: any, j: number) => {
                              if (column.slot) {
                                return column.slot
                              } else if (column.renderer) {
                                return (
                                  <td
                                    key={ j }
                                    className={ `${ column.classes }${ isLastColumnInRow(columnsInLeftBody(), i, j, columnsInLeftBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                  >
                                    { column.renderer(i, j, column, record) }
                                  </td>
                                )
                              } else {
                                return (
                                  <td
                                    key={ j }
                                    className={ `${ column.classes }${ isLastColumnInRow(columnsInLeftBody(), i, j, columnsInLeftBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                  >
                                    { record[column.name] ? record[column.name] : '&nbsp;' }
                                  </td>
                                )
                              }
                            })
                          }
                        </tr>
                      )
                    })
                  }
                  {
                    bodyScrollableV &&
                    <tr>
                      <td
                        colSpan={
                          props.selectionConfigs && props.selectionConfigs.multipleSelect
                            ? columnsInLeftBody.length + 1
                            : columnsInLeftBody.length
                        }
                        className="soupe-ui-table-colspan"
                      >
                      </td>
                    </tr>
                  }
                  </tbody>
                </table>
              </div>
            }
            <div
              className="column soupe-ui-table-body-center overflow-x-auto overflow-y-auto columns is-gapless mx-0 my-0"
            >
              <table className={ `column table is-striped${ bodyScrollableV ? ' soupe-ui-table-scroll' : '' }` }>
                {
                  props.selectionConfigs &&
                  props.selectionConfigs.multipleSelect &&
                  props.fixedLeftColumns && props.fixedLeftColumns < 1 &&
                  <colgroup>
                    <col className="soupe-ui-table-checkbox-column"/>
                  </colgroup>
                }
                {
                  columnsInCenterBody().map((column: any, i: number) => {
                    return (
                      <colgroup
                        key={ i }
                      >
                        <col
                          style={ {
                            width: column.width
                              ? column.width
                              : autoColumnWidth
                          } }
                        />
                      </colgroup>
                    )
                  })
                }
                <tbody>
                {
                  props.records.map((record, i) => {
                    return (
                      <tr
                        key={ i }
                      >
                        {
                          props.selectionConfigs &&
                          props.selectionConfigs.multipleSelect &&
                          props.fixedLeftColumns && props.fixedLeftColumns < 1 &&
                          <td
                            className="soupe-ui-table-checkbox-column"
                          >
                            <input
                              defaultChecked={ isChecked(record) }
                              onClick={ (event) => onCheck(event, record) }
                              type="checkbox"
                            />
                          </td>
                        }
                        {
                          columnsInCenterBody().map((column: any, j: number) => {
                            if (column.slot) {
                              return column.slot
                            } else if (column.renderer) {
                              return (
                                <td
                                  key={ j }
                                  className={ `${ column.classes }${ isLastColumnInRow(columnsInCenterBody(), i, j, columnsInCenterBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                >
                                  { column.renderer(i, j, column, record) }
                                </td>
                              )
                            } else {
                              return (
                                <td
                                  key={ j }
                                  className={ `${ column.classes }${ isLastColumnInRow(columnsInCenterBody(), i, j, columnsInCenterBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                >
                                  { record[column.name] ? record[column.name] : '&nbsp;' }
                                </td>
                              )
                            }
                          })
                        }
                      </tr>
                    )
                  })
                }
                {
                  (!props.records || (props.records.length === 0 && props.emptyMessage)) &&
                  <tr>
                    <td
                      colSpan={ columnsInCenterBody.length }
                      className="text-center"
                    >
                      { props.emptyMessage }
                    </td>
                  </tr>
                }
                </tbody>
              </table>
            </div>
            {
              hasRightFixedColumns() &&
              <div
                className="column is-narrow soupe-ui-table-body-right overflow-y-hidden columns is-gapless mx-0 my-0"
              >
                <table className={ `column table is-striped${ !bodyScrollableV ? ' soupe-ui-table-scroll' : '' }` }>
                  {
                    columnsInRightBody().map((column: any, i: number) => {
                      return (
                        <colgroup
                          key={ i }
                        >
                          <col style={ { width: column.width } }/>
                        </colgroup>
                      )
                    })
                  }
                  <tbody>
                  {
                    props.records.map((record, i) => {
                      return (
                        <tr
                          key={ i }
                        >
                          {
                            columnsInRightBody().map((column: any, j: number) => {
                              if (column.slot) {
                                return column.slot
                              } else if (column.renderer) {
                                return (
                                  <td
                                    key={ j }
                                    className={ `${ column.classes }${ isLastColumnInRow(columnsInRightBody(), i, j, columnsInRightBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                  >
                                    { column.renderer(i, j, column, record) }
                                  </td>
                                )
                              } else {
                                return (
                                  <td
                                    key={ j }
                                    className={ `${ column.classes }${ isLastColumnInRow(columnsInRightBody(), i, j, columnsInRightBody().length) ? ' soupe-ui-table-no-right-border' : '' }` }
                                  >
                                    { record[column.name] ? record[column.name] : '&nbsp;' }
                                  </td>
                                )
                              }
                            })
                          }
                        </tr>
                      )
                    })
                  }
                  {
                    bodyScrollableV &&
                    <tr>
                      <td
                        colSpan={
                          props.selectionConfigs && props.selectionConfigs.multipleSelect
                            ? columnsInRightBody().length + 1
                            : columnsInRightBody().length
                        }
                        className="soupe-ui-table-colspan"
                      >
                      </td>
                    </tr>
                  }
                  </tbody>
                </table>
              </div>
            }
          </div>
          {
            props.footer && props.footer.length > 0 &&
            <div
              className="hero-foot soupe-ui-table-footer columns is-gapless"
            >
              {
                hasLeftFixedColumns() &&
                <div
                  className="column is-narrow soupe-ui-table-footer-left"
                >
                  LF
                </div>
              }
              <div className="column soupe-ui-table-footer-center">CF</div>
              {
                hasRightFixedColumns() &&
                <div
                  className="column is-narrow soupe-ui-table-footer-right"
                  v-if="hasRightFixedColumns"
                >
                  RF
                </div>
              }
            </div>
          }
        </div>
        {
          props.paging &&
          <div className="hero-foot columns pagination-bottom is-gapless is-vcentered mx-0 my-0 mt-2">
            <div className="column">
              <div className="pagination-bar">
                {
                  t('soupe.ui.components.table.pagination_records', {
                    startNumber: startNumber(),
                    endNumber: endNumber(),
                    total: props.total
                  })
                }
              </div>
            </div>
            <div className="column is-narrow">
              <div
                className="has-text-right pagination-bar columns is-gapless is-vcentered mx-0 my-0"
              >
                <div className="column is-narrow">
                  {
                    t('soupe.ui.components.table.pagination_pages', {
                      currentPage: props.page,
                      totalPage: props.totalPage !== undefined && props.totalPage > 0 ? props.totalPage : 1
                    })
                  }
                </div>
                {
                  props.pageSizeInBottom &&
                  <div className="column is-narrow">
                    <Select
                      leftLabel={ t('soupe.ui.components.table.pagination_page_sizes_left_bottom_label') }
                      options={ pageSizes }
                      rightLabel={ t('soupe.ui.components.table.pagination_page_sizes_right_label') }
                      value="size"
                      onSelect={ (option) => changePageSize(option) }
                    />
                  </div>
                }
                <div className="column is-narrow">
                  <button
                    onClick={ () => prevPage() }
                    className={ `button hollow soupe-ui-table-pagination-button is-primary${ props.page === 1 ? ' disabled' : '' }` }
                  >
              <span className="icon">
              <i className="fas fa-caret-left"></i>
              </span>
                  </button>
                </div>
                <div className="column is-narrow">
                  <button
                    onClick={ () => nextPage() }
                    className={ `button hollow soupe-ui-table-pagination-button is-primary${ props.page === props.totalPage || props.totalPage === 0 ? ' disabled' : '' }` }
                  >
              <span className="icon">
              <i className="fas fa-caret-right"></i>
              </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

Table.defaultProps = {
  border: true,
  autoHeight: false,
  headerCenter: true,
  total: 0,
  page: 1,
  totalPage: 1,
  size: 20,
  selectionConfigs: {
    selectAll: false,
    multipleSelect: false,
    isChecked(record: any) {
      return record.checked
    },
    checkingAll(checked: boolean, records: any) {
      for (let record of records) {
        record.checked = checked
      }
    }
  }
}

Table.propTypes = {}

export default Table
