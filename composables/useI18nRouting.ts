import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export const useI18nRouting = () => {
  const router = useRouter()
  const route = useRoute()
  const i18n = useI18n()
  
  const localePath = (path: string) => {
    const prefix = i18n.locale.value === 'en' ? '' : `/${i18n.locale.value}`
    return `${prefix}${path}`
  }
  
  const switchLocalePath = (targetLocale: string) => {
    const { fullPath } = route
    const newPath = fullPath.replace(/^\/[^/]*/, '')
    return targetLocale === 'en' ? newPath : `/${targetLocale}${newPath}`
  }
  
  return {
    localePath,
    switchLocalePath
  }
}