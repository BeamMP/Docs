import { defineConfig, type DefaultTheme } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import container from 'markdown-it-container'
import type Token from 'markdown-it/lib/token.mjs'
import enTranslations from '../en/nav-translations.json'
import deTranslations from '../de/nav-translations.json'
import frTranslations from '../fr/nav-translations.json'
import esTranslations from '../es/nav-translations.json'
import itTranslations from '../it/nav-translations.json'
import ruTranslations from '../ru/nav-translations.json'
import zhTranslations from '../zh/nav-translations.json'

type LocaleKey = 'root' | 'de' | 'fr' | 'es' | 'it' | 'ru' | 'zh'

type NavItem = {
  text: string
  link?: string
  items?: NavItem[]
}

type TranslationMap = Record<string, string>

const localeBasePath: Record<LocaleKey, string> = {
  root: '',
  de: '/de/',
  fr: '/fr/',
  es: '/es/',
  it: '/it/',
  ru: '/ru/',
  zh: '/zh/'
}

const translations: Record<LocaleKey, TranslationMap> = {
  root: enTranslations as TranslationMap,
  de: deTranslations as TranslationMap,
  fr: frTranslations as TranslationMap,
  es: esTranslations as TranslationMap,
  it: itTranslations as TranslationMap,
  ru: ruTranslations as TranslationMap,
  zh: zhTranslations as TranslationMap
}

const localizeLink = (locale: LocaleKey, link?: string) => {
  if (!link || link.startsWith('http')) {
    return link
  }

  if (locale === 'root') {
    return `/en/${link === '/' ? '' : link.replace(/^\//, '')}`
  }

  return `${localeBasePath[locale]}${link === '/' ? '' : link.replace(/^\//, '')}`
}

const localizeItems = (locale: LocaleKey, items: NavItem[]): DefaultTheme.NavItem[] => {
  return items.map((item) => {
    const localized: Record<string, unknown> = {
      text: translations[locale][item.text] ?? item.text
    }

    if (item.link) {
      localized.link = localizeLink(locale, item.link)
    }

    if (item.items) {
      localized.items = localizeItems(locale, item.items)
    }

    return localized as unknown as DefaultTheme.NavItem
  })
}

const baseNav: NavItem[] = [
  { text: 'Home', link: '/' },
  {
    text: 'Support',
    items: [
      { text: 'Playing BeamMP', link: '/game/getting-started' },
      { text: 'Running a BeamMP-Server', link: '/server/create-a-server' },
      { text: 'Mod & Resource Creation', link: '/guides/mod-creation/server/getting-started' }
    ]
  },
  {
    text: 'FAQ',
    items: [
      { text: 'How to check for CGNAT?', link: '/FAQ/How-to-check-for-CGNAT' },
      { text: 'Where can I find my IP address?', link: '/FAQ/where-to-find-my-IP' },
      { text: 'How to remove mods?', link: '/FAQ/Clearing-mods' },
      { text: 'Manually updating the Launcher', link: '/FAQ/Update-launcher' },
      { text: 'Changing the Launcher port', link: '/FAQ/Change-launcher-port' },
      { text: 'Creating Exclusions (Defender)', link: '/FAQ/Defender-exclusions' },
      { text: 'Player FAQ', link: '/FAQ/player-faq' },
      { text: 'Game FAQ', link: '/FAQ/game-faq' },
      { text: 'Server FAQ', link: '/FAQ/server-faq' }
    ]
  },
  {
    text: 'Development Guides',
    items: [
      { text: 'Development Environment Setup', link: '/guides/beammp-dev/beammp-dev' },
      {
        text: 'Mod Creation',
        items: [{ text: 'Client Scripting Reference', link: '/scripting/mod-reference' }]
      },
      {
        text: 'Resource Creation',
        items: [{ text: 'Server Resources', link: '/guides/mod-creation/server/getting-started' }]
      },
      {
        text: 'Scripting Reference',
        items: [
          { text: 'Mod (In-Game)', link: '/scripting/mod-reference' },
          {
            text: 'Server',
            link: '/scripting/server/latest-server-reference',
            items: [
              { text: 'Version 3.X (Latest)', link: '/scripting/server/latest-server-reference' },
              { text: 'Version 2.X (Deprecated)', link: '/scripting/server/v2-server-reference' }
            ]
          }
        ]
      }
    ]
  },
  {
    text: 'BeamNG Documentation',
    items: [
      {
        text: 'Content Development',
        items: [
          { text: 'Introduction', link: '/beamng/dev/index' },
          {
            text: 'Programming',
            items: [
              { text: 'UI Apps (HTML)', link: '/beamng/dev/modding/ui-apps' },
              { text: 'ImGui Window Tutorial', link: '/beamng/dev/modding/imgui-window-tutorial' },
              { text: 'Lua Mods (Scripts)', link: '/beamng/dev/modding/lua-mods' }
            ]
          },
          {
            text: 'Content',
            items: [
              { text: 'Maps', link: '/beamng/dev/content/maps' },
              { text: 'Props', link: '/beamng/dev/content/props' },
              { text: 'Vehicles', link: '/beamng/dev/content/vehicles' }
            ]
          }
        ]
      },
      { text: 'Lua Code Snippets', link: '/beamng/lua-snippets' },
      { text: 'CSS Code Snippets', link: '/beamng/css-snippets' },
      { text: 'ImGui Code Snippets', link: '/beamng/imgui-snippets' },
      { text: 'CEF Code Snippets', link: '/beamng/cef-snippets' }
    ]
  },
  {
    text: 'Community',
    items: [
      { text: 'General Information', link: '/community/index' },
      { text: 'Rules', link: '/community/rules' },
      { text: 'Contributing', link: '/contributing' }
    ]
  }
]

const localeNav = (locale: LocaleKey) => localizeItems(locale, baseNav)

const localeSidebar = (locale: LocaleKey) => localizeItems(locale, baseNav)

const makeLocale = (locale: LocaleKey, label: string, lang: string, link?: string) => ({
  label,
  lang,
  ...(link ? { link } : {}),
  themeConfig: {
    nav: localeNav(locale) as DefaultTheme.NavItem[],
    sidebar: localeSidebar(locale) as DefaultTheme.SidebarItem[]
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BeamMP Docs',
  description:
    'This website serves as the new BeamMP Documentation site for general self serve support, guides and documentation.',
  lastUpdated: true,
  locales: {
    root: makeLocale('root', 'English', 'en', '/en/'),
    de: makeLocale('de', 'Deutsch', 'de', '/de/'),
    fr: makeLocale('fr', 'Français', 'fr', '/fr/'),
    es: makeLocale('es', 'Español', 'es', '/es/'),
    it: makeLocale('it', 'Italiano', 'it', '/it/'),
    ru: makeLocale('ru', 'Pусский', 'ru', '/ru/'),
    zh: makeLocale('zh', '中文', 'zh', '/zh/')
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)

      const makeContainer = (type: string, defaultTitle: string) => [
        container,
        type,
        {
          render(tokens: Token[], idx: number) {
            const token = tokens[idx]
            const info = token.info.trim().slice(type.length).trim()
            const title = info || defaultTitle
            if (token.nesting === 1) {
              return `<div class="custom-block ${type}"><p class="custom-block-title">${title}</p>\n`
            }
            return '</div>\n'
          }
        }
      ] as const

      md.use(...makeContainer('note', 'NOTE'))
      md.use(...makeContainer('quote', 'QUOTE'))
    },
  },
  sitemap: {
    hostname: 'https://example.com'
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/beammp/docs/edit/main/docs/:path'
    },
    logo: {
      light: '/assets/core/beammp_dark.png',
      dark: '/assets/core/beammp_light.png'
    },
    search: {
      provider: 'local'
    }
  }
})
