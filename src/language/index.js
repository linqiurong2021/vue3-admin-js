
import { createI18n } from 'vue-i18n'
import CN from './cn'
import EN from './en'
const i18n = createI18n({
  locale: 'cn',
  fallbackLocale: 'en',
  messages: {
    en: EN,
    cn: CN
  }
})
export default i18n