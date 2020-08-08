import React from 'react'

function SelectDemo() {
  return (
    <div className='dropdown is-hoverable'>
      <div className='dropdown-trigger'>
        <button
          className='button'
          aria-haspopup='true'
          aria-controls='dropdown-menu'
        >
          <span>Dropdown button</span>
          <span className='icon is-small'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </button>
      </div>
      <div className='dropdown-menu' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          <button className='dropdown-item button is-white'>
            Dropdown item
          </button>
          <button className='dropdown-item button is-white'>
            Other dropdown item
          </button>
          <button className='dropdown-item button is-white is-active'>
            Active dropdown item
          </button>
          <button className='dropdown-item button is-white'>
            Other dropdown item
          </button>
          <button className='dropdown-item button is-white'>
            With a divider
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectDemo
