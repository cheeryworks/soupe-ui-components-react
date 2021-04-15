import React from 'react'
import TreeSelect from '../../../components/tree-select/TreeSelect'

const records = [
  {
    id: 'A',
    name: 'A',
    children: [
      {
        id: 'A1',
        name: 'A1'
      },
      {
        id: 'A2',
        name: 'A2'
      }
    ]
  }
]

function TreeSelectDemo() {
  return <TreeSelect options={records} width="100%"></TreeSelect>
}

export default TreeSelectDemo
