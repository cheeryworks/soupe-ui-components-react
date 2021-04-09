function getValue(record: Object, property: string) {
  if (record) {
    if (Object.prototype.hasOwnProperty.call(record, property)) {
      // @ts-ignore
      return record[property]
    } else {
      return record
    }
  }

  return null
}

const RecordUtil = {
  getRecordValue(record: Object, valueProperty?: string) {
    if (!valueProperty) {
      valueProperty = 'id'
    }

    return getValue(record, valueProperty)
  },
  getRecordDisplayName(record: Object, displayProperty?: string) {
    if (!displayProperty) {
      displayProperty = 'name'
    }

    return getValue(record, displayProperty)
  }
}

export default RecordUtil
