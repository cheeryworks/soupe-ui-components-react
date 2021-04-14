function getValue(record: any, property: string) {
  if (record) {
    if (Object.prototype.hasOwnProperty.call(record, property)) {
      return record[property]
    } else {
      return record
    }
  }

  return null
}

const RecordUtil = {
  getRecordValue(record: any, valueProperty?: string) {
    if (!valueProperty) {
      valueProperty = 'id'
    }

    return getValue(record, valueProperty)
  },
  getRecordDisplayName(record: any, displayProperty?: string) {
    if (!displayProperty) {
      displayProperty = 'name'
    }

    return getValue(record, displayProperty)
  }
}

export default RecordUtil
