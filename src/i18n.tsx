import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

function loadLocaleMessages() {
  const locales = require.context(
    '@cheeryworks/soupe-ui-components-skeleton/src/locales/demos/',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )

  let merge = require('merge')

  interface MessagesType {
    [key: string]: any
  }

  const messages: MessagesType = {}

  locales.keys().forEach((key: string) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1].split('_')[1]
      messages[locale] = merge.recursive(true, messages[locale], locales(key))
    }
  })

  let componentLocales = require.context(
    '@cheeryworks/soupe-ui-components-skeleton/src/locales/components/',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )

  componentLocales.keys().forEach((key: string) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1].split('_')[1]
      messages[locale] = merge.recursive(true, messages[locale], componentLocales(key))
    }
  })

  return messages
}

const messages = loadLocaleMessages()

const resources = {
  en: {
    translation: messages.en
  },
  zh: {
    translation: messages.zh
  }
}

i18n
.use(initReactI18next)
.init({
  resources,
  lng: 'en',
  interpolation: {
    prefix: '{',
    suffix: '}'
  }
})
