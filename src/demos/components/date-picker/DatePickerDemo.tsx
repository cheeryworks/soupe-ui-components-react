import React from 'react'
import DatePicker from '../../../components/date-picker/DatePicker'

function DatePickerDemo() {
  return <div className="columns is-multiline mx-0 my-0">
    <DatePicker
      className="column is-6"
      leftLabel="Normal Date Picker"
      value="2020-08-18"
    ></DatePicker>
    <DatePicker
      className="column is-6"
      leftLabel="Readonly Date Picker"
      readonly
      value="2020-08-18"
    ></DatePicker>
    <DatePicker
      className="column is-12"
      leftLabel="Full width Date Picker"
      value="2020-08-18"
    ></DatePicker>
    <DatePicker
      className="column is-6"
      leftLabel="Start Date"
      value="2019-08-18"
    ></DatePicker>
    <DatePicker
      className="column is-6"
      leftLabel="End Date"
      value="2020-08-18"
    ></DatePicker>
  </div>
}

export default DatePickerDemo
