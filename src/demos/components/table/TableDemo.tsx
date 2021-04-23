import React from 'react'
import Table from '../../../components/table/Table'

function TableDemo() {

  const columns = [
    {
      title: 'A',
      name: 'a',
      width: 100
    },
    {
      title: 'BC',
      columns: [
        {
          title: 'B',
          name: 'b',
          width: 200
        },
        {
          title: 'C',
          name: 'c',
          width: 200
        }
      ]
    },
    {
      title: 'D',
      name: 'd',
      width: 200
    },
    {
      title: 'E',
      name: 'e',
      width: 200
    },
    {
      title: 'F',
      name: 'f',
      width: 200
    },
    {
      title: 'G',
      name: 'g',
      width: 200
    },
    {
      title: 'H',
      name: 'h',
      width: 200
    },
    {
      title: 'I',
      name: 'i',
      width: 100
    },
    {
      title: 'J',
      name: 'j',
      width: 100
    }
  ]

  const selectionConfigs = {
    selectAll: true,
    multipleSelect: true
  }

  const records = [
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    },
    {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J'
    }
  ]

  return <Table
    columns={ columns }
    fixedLeftColumns={ 1 }
    fixedRightColumns={ 2 }
    records={ records }
    selectionConfigs={ selectionConfigs }
    className="hero-body px-0 py-0"
    pageSizeInBottom
    paging>
  </Table>
}

export default TableDemo
