import React, { useRef, useState } from 'react'
import Select from '../select/Select'
import { useTranslation } from 'react-i18next'

export interface DatePickerProps {
  className?: string
  value?: any
  readonly?: boolean
  width?: string
  leftLabel?: string
  rightLabel?: string
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { t } = useTranslation()

  const now = new Date()

  const [ panelType, setPanelType ] = useState<string>('date')
  const [ year, setYear ] = useState<number>(now.getFullYear())
  const [ month, setMonth ] = useState<number>(now.getMonth())
  const [ day, setDay ] = useState<number>(now.getDay())
  const [ date, setDate ] = useState<string>(
    `${ year }-${ ('0' + (month + 1)).slice(-2) }-${ ('0' + now.getDay()).slice(-2) }`)

  const [ yearList, setYearList ] = useState<Array<number>>(Array.from(
    { length: 12 },
    (value, index) => new Date().getFullYear() + index
  ))

  const childRef = useRef<any>()

  const monthList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
  const weekList = [ 0, 1, 2, 3, 4, 5, 6 ]

  function chType(type: string) {
    setPanelType(type)
  }

  function chYearRange(next: boolean) {
    if (next) {
      setYearList(yearList.map((i) => i + 12))
    } else {
      setYearList(yearList.map((i) => i - 12))
    }
  }

  function prevMonthPreview() {
    setMonth(month === 0 ? 0 : month - 1)
  }

  function nextMonthPreview() {
    setMonth(month === 11 ? 11 : month + 1)
  }

  function selectYear(year: number) {
    if (!validateYear(year)) {
      return
    }

    setYear(year)
    setPanelType('month')
  }

  function selectMonth(month: number) {
    if (!validateMonth(month)) {
      return
    }

    setMonth(month)
    setPanelType('date')
  }

  function selectDay(day: any) {
    if (!validateDate(day)) {
      return
    }

    if (day.previousMonth) {
      if (month === 0) {
        setYear(year - 1)
        setMonth(11)
      } else {
        setMonth(month - 1)
      }
    } else if (day.nextMonth) {
      if (month === 11) {
        setYear(year + 1)
        setMonth(0)
      } else {
        setMonth(month + 1)
      }
    }

    setDay(day.value)
    setDate(`${ year }-${ ('0' + (month + 1)).slice(-2) }-${ ('0' + day.value).slice(-2) }`)

    if (childRef.current) {
      childRef.current.close()
    }
  }

  function getDaysOfMonth() {
    let currentMonthLength = new Date(
      year,
      month + 1,
      0
    ).getDate()

    let days: any = Array.from({ length: currentMonthLength }, (val, index) => {
      return {
        currentMonth: true,
        value: index + 1
      }
    })

    let startDay = new Date(year, month, 1).getDay()
    let previousMonthLength = new Date(
      year,
      month,
      0
    ).getDate()

    for (let i = 0; i < startDay; i++) {
      days = [
        { previousMonth: true, value: previousMonthLength - i }
      ].concat(days)
    }

    let daysOfMonth = []
    let daysOfWeek = []

    for (let i = days.length, item = 1; i < 42; i++, item++) {
      days[i] = { nextMonth: true, value: item }
    }

    for (let i = 0; i < 42; i++) {
      daysOfWeek.push(days[i])

      if ((i + 1) % 7 === 0) {
        let realDaysOfWeek = [ ...daysOfWeek ]
        daysOfMonth.push(realDaysOfWeek)
        daysOfWeek = []
      }
    }

    return daysOfMonth
  }

  function isSelected(type: string, item: any) {
    if (type === 'year') {
      return item === year
    } else if (type === 'month') {
      return item === month + 1
    } else if (type === 'date') {
      return item.currentMonth && day === item.value
    }
  }

  function translateMonth(item: number) {
    return {
      1: t('soupe.ui.components.date_picker.months.jan'),
      2: t('soupe.ui.components.date_picker.months.feb'),
      3: t('soupe.ui.components.date_picker.months.mar'),
      4: t('soupe.ui.components.date_picker.months.apr'),
      5: t('soupe.ui.components.date_picker.months.may'),
      6: t('soupe.ui.components.date_picker.months.jun'),
      7: t('soupe.ui.components.date_picker.months.jul'),
      8: t('soupe.ui.components.date_picker.months.aug'),
      9: t('soupe.ui.components.date_picker.months.sep'),
      10: t('soupe.ui.components.date_picker.months.oct'),
      11: t('soupe.ui.components.date_picker.months.nov'),
      12: t('soupe.ui.components.date_picker.months.dec')
    }[item]
  }

  function translateWeek(item: number) {
    return {
      0: t('soupe.ui.components.date_picker.weeks.sun'),
      1: t('soupe.ui.components.date_picker.weeks.mon'),
      2: t('soupe.ui.components.date_picker.weeks.tue'),
      3: t('soupe.ui.components.date_picker.weeks.wed'),
      4: t('soupe.ui.components.date_picker.weeks.thu'),
      5: t('soupe.ui.components.date_picker.weeks.fri'),
      6: t('soupe.ui.components.date_picker.weeks.sat')
    }[item]
  }

  function validateYear(year: number) {
    // return year > this.maxYear || year < this.minYear
    return true
  }

  function validateMonth(month: number) {
    // var condition1 =
    //   new Date(this.tmpYear, month).getTime() >=
    //   new Date(this.minYear, this.minMonth - 1).getTime()
    // var condition2 =
    //   new Date(this.tmpYear, month).getTime() >=
    //   new Date(this.minYear, this.minMonth - 1).getTime()
    //
    // return !(condition1 && condition2)
    return true
  }

  function validateDate(date: Date) {
    // let mon = month
    // if (date.previousMonth) {
    //   mon -= 1
    // } else if (date.nextMonth) {
    //   mon += 1
    // }
    //
    // var condition1 =
    //   new Date(year, mon, date.value).getTime() >=
    //   new Date(this.minYear, this.minMonth - 1, this.minDate).getTime()
    // var condition2 =
    //   new Date(year, mon, date.value).getTime() <=
    //   new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()
    // return !(condition1 && condition2)
    return true
  }

  return (
    <Select
      ref={ childRef }
      closeOnClick={ true }
      customizedName={ date }
      leftLabel={ props.leftLabel }
      rightLabel={ props.rightLabel }
      readonly={ props.readonly }
      width={ props.width }
      className={ `soupe-ui-date-picker ${ props.className }` }>
      <div className="panel is-primary">
        <div className="panel-heading columns is-gapless is-vcentered">
          <div onClick={ () => prevMonthPreview() } className="column has-text-centered">
            <span className="icon">
              <i className="fas fa-caret-left"></i>
            </span>
          </div>
          <div
            onClick={ () => chType('year') }
            className="column has-text-centered"
          >
            { year }
          </div>
          <div
            onClick={ () => chType('month') } className="column has-text-centered">
            { translateMonth(month + 1) }
          </div>
          <div
            onClick={ () => nextMonthPreview() } className="column has-text-centered">
            <span className="icon">
              <i className="fas fa-caret-right"></i>
            </span>
          </div>
        </div>
        {
          panelType === 'year' &&
          <div>
            <div className="columns is-vcentered is-gapless px-0 py-0">
              <div
                onClick={ () => chYearRange(false) } className="column has-text-centered">
              <span className="icon">
                <i className="fas fa-angle-left"></i>
              </span>
              </div>
              <div className="column has-text-centered">
                <span>{ yearList[0] }</span>
                <span>-</span>
                <span>{ yearList[yearList.length - 1] }</span>
              </div>
              <div
                onClick={ () => chYearRange(true) } className="column has-text-centered">
              <span className="icon">
                <i className="fas fa-angle-right"></i>
              </span>
              </div>
            </div>
            <div className="columns is-multiline is-vcentered mx-0 my-0 px-2 py-2">
              {
                yearList.map((item) => {
                  return (
                    <div
                      className={ `column is-4 has-text-centered${ isSelected('year', item) ? ' has-background-primary' : '' }` }
                      key={ item }
                      onClick={ () => selectYear(item) }
                    >
                      { item }
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        {
          panelType === 'month' &&
          <div>
            <div className="columns is-multiline is-vcentered mx-0 my-0 px-2 py-2">
              {
                monthList.map((item, index) => {
                  return (
                    <div
                      className={ `column is-4 has-text-centered${ isSelected('month', item) ? ' has-background-primary' : '' }` }
                      key={ item }
                      onClick={ () => selectMonth(index) }
                    >
                      { translateMonth(item) }
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        {
          panelType === 'date' &&
          <div>

            <div className="columns is-gapless mx-0 my-0 px-2 py-2">
              {
                weekList.map((item) => {
                  return (
                    <div
                      key={ item }
                      className="column has-text-centered mx-1"
                    >
                      { translateWeek(item) }
                    </div>
                  )
                })
              }
            </div>
            {
              getDaysOfMonth().map((daysOfWeek, daysOfWeekIndex) => {
                return (
                  <div
                    key={ daysOfWeekIndex }
                    className={ `columns is-gapless mx-0 my-0 px-2 py-2` }>
                    {
                      daysOfWeek.map((dayOfWeek, dayOfWeekIndex) => {
                        return (
                          <div
                            key={ dayOfWeekIndex }
                            className={ `column has-text-centered mx-1${ !dayOfWeek.currentMonth ? ' has-text-grey-light' : '' }` }
                            onClick={ () => selectDay(dayOfWeek) }>
                            <span
                              className={ `px-2 py-1${ isSelected('date', dayOfWeek) ? ' has-background-primary' : '' }` }>
                              { dayOfWeek.value }
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </Select>
  )
}

DatePicker.defaultProps = {}

DatePicker.propTypes = {}

export default DatePicker