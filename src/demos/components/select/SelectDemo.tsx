import React from 'react'
import Select from '../../../components/select/Select'
import { useTranslation } from 'react-i18next'

const options = [
  {
    id: 'A1',
    name: 'A1'
  },
  {
    id: 'A2',
    name: 'A2'
  }
]

const table = {
  totalPage: 2,
  page: 1,
  pageSizes: [ 20, 50, 100 ]
}

function SelectDemo() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="field">
        <label className="label">Default Select</label>
        <Select options={ options }></Select>
      </div>
      <div className="field">
        <label className="label">Select with customized labels</label>
        <Select
          leftLabel={
            t('soupe.ui.components.table.pagination_pages', {
              currentPage: table.page,
              totalPage: table.totalPage > 0 ? table.totalPage : 1
            }) +
            t('soupe.ui.components.table.pagination_page_sizes_left_bottom_label') }
          options={ table.pageSizes }
          rightLabel={
            t('soupe.ui.components.table.pagination_page_sizes_right_label')
          }>
        </Select>
      </div>
      <div className="field">
        <label className="label">Readonly Select</label>
        <Select options={ options } readonly></Select>
      </div>
      <div className="field">
        <label className="label">100% width Select</label>
        <Select options={ options } width="100%"></Select>
      </div>
    </div>
  )
}

export default SelectDemo
