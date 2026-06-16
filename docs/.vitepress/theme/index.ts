import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import AppFooter from './components/AppFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(AppFooter)
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
} satisfies Theme
