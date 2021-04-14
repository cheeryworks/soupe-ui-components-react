import React from 'react'
import Tree from '../../../components/tree/Tree'

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

function TreeDemo() {
  return <Tree
    records={ records }
    itemControls={ (record) => (
      // eslint-disable-next-line
      <a>
        <i className="icon fas fa-bars" onClick={ () => console.log(record) }></i>
      </a>
    ) }/>
}

export default TreeDemo
