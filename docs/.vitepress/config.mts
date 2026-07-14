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

const legacyBaseNav: NavItem[] = [
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

const baseNav: NavItem[] = [
  { text: 'Home', link: '/' },
  {
    text: 'Get Started',
    items: [
      { text: 'Install BeamMP', link: '/get-started/install-beammp' },
      { text: 'Join Your First Server', link: '/get-started/join-first-server' },
      { text: 'First-Time Multiplayer Settings', link: '/get-started/multiplayer-settings-quickstart' }
    ]
  },
  {
    text: 'Players',
    items: [
      { text: 'Gameplay Basics', link: '/players/gameplay-basics' },
      { text: 'Multiplayer Settings', link: '/players/multiplayer-settings' },
      { text: 'Player FAQ', link: '/players/faq' },
      { text: 'Mod Safety', link: '/players/mod-safety' }
    ]
  },
  {
    text: 'Server Owners',
    items: [
      { text: 'Host a Server', link: '/server-owners/host-a-server' },
      { text: 'Port Forwarding', link: '/server-owners/port-forwarding' },
      { text: 'Check for CGNAT', link: '/server-owners/cgnat' },
      { text: 'Server Maintenance', link: '/server-owners/maintenance' },
      { text: 'Server FAQ', link: '/server-owners/faq' },
      { text: 'Server Error Codes', link: '/server-owners/error-codes' }
    ]
  },
  {
    text: 'Developers',
    items: [
      { text: 'Development Environment Setup', link: '/developers/dev-environment-setup' },
      { text: 'Mod & Resource Creation', link: '/developers/mod-and-resource-creation' },
      {
        text: 'BeamMP Scripting Reference',
        items: [
          { text: 'Mod (In-Game)', link: '/developers/beammp-scripting/mod-in-game' },
          {
            text: 'Server',
            link: '/developers/beammp-scripting/server/latest',
            items: [
              { text: 'Version 3.X (Latest)', link: '/developers/beammp-scripting/server/latest' },
              { text: 'Version 2.X (Deprecated)', link: '/developers/beammp-scripting/server/legacy-v2' }
            ]
          }
        ]
      }
    ]
  },
  {
    text: 'Game Documentation',
    items: [
      {
        text: 'Content Development',
        items: [
          { text: 'Introduction', link: '/game-documentation/content-development/index' },
          {
            text: 'Programming',
            items: [
              { text: 'UI Apps (HTML)', link: '/game-documentation/programming/ui-apps-html-cef' },
              { text: 'ImGui Window Tutorial', link: '/game-documentation/programming/imgui' },
              { text: 'Lua Mods (Scripts)', link: '/game-documentation/programming/lua' }
            ]
          },
          {
            text: 'Content',
            items: [
              { text: 'Maps', link: '/game-documentation/content-development/maps' },
              { text: 'Props', link: '/game-documentation/content-development/props' },
              { text: 'Vehicles', link: '/game-documentation/content-development/vehicles' }
            ]
          }
        ]
      },
      { text: 'Lua Code Snippets', link: '/game-documentation/snippets/lua-snippets' },
      { text: 'CSS Code Snippets', link: '/game-documentation/snippets/css-snippets' },
      { text: 'ImGui Code Snippets', link: '/game-documentation/snippets/imgui-snippets' },
      { text: 'CEF Code Snippets', link: '/game-documentation/snippets/cef-snippets' }
    ]
  },
  {
    text: 'Troubleshooting',
    items: [
      { text: 'Launcher Update Issues', link: '/troubleshooting/launcher-update' },
      { text: 'Connection / Networking Issues', link: '/troubleshooting/connection-networking' },
      { text: 'Defender / Firewall Exclusions', link: '/troubleshooting/defender-exclusions' },
      { text: 'Error Codes', link: '/troubleshooting/error-codes' }
    ]
  },
  {
    text: 'Community',
    items: [
      { text: 'Community Info', link: '/community/index' },
      { text: 'Rules', link: '/community/rules' },
      { text: 'Contributing', link: '/community/contributing' }
    ]
  }
]

const navByLocale = (_locale: LocaleKey) => baseNav

const localeNav = (locale: LocaleKey) => localizeItems(locale, navByLocale(locale))

const localeSidebar = (locale: LocaleKey) => localizeItems(locale, navByLocale(locale))

const docsLocales = ['en', 'de', 'fr', 'es', 'it', 'ru', 'zh'] as const

const legacyRewritePairs: Record<string, string> = {
  'game/getting-started': 'get-started/index',
  'game/multiplayer-settings': 'players/multiplayer-settings',

  'server/create-a-server': 'server-owners/host-a-server',
  'server/port-forwarding': 'server-owners/port-forwarding',
  'server/server-maintenance': 'server-owners/maintenance',
  'server/error-codes': 'server-owners/error-codes',

  'FAQ/player-faq': 'players/faq',
  'FAQ/Clearing-mods': 'players/mod-safety',
  'FAQ/server-faq': 'server-owners/faq',
  'FAQ/How-to-check-for-CGNAT': 'server-owners/cgnat',
  'FAQ/Update-launcher': 'troubleshooting/launcher-update',
  'FAQ/where-to-find-my-IP': 'troubleshooting/connection-networking',
  'FAQ/Defender-exclusions': 'troubleshooting/defender-exclusions',

  'guides/index': 'developers/index',
  'guides/beammp-dev/beammp-dev': 'developers/dev-environment-setup',
  'guides/mod-creation/server/getting-started': 'developers/mod-and-resource-creation',

  'scripting/mod-reference': 'developers/beammp-scripting/mod-in-game',
  'scripting/server/latest-server-reference': 'developers/beammp-scripting/server/latest',
  'scripting/server/v2-server-reference': 'developers/beammp-scripting/server/legacy-v2',

  'beamng/dev/index': 'game-documentation/content-development/index',
  'beamng/dev/content/maps': 'game-documentation/content-development/maps',
  'beamng/dev/content/props': 'game-documentation/content-development/props',
  'beamng/dev/content/vehicles': 'game-documentation/content-development/vehicles',
  'beamng/dev/modding/ui-apps': 'game-documentation/programming/ui-apps-html-cef',
  'beamng/dev/modding/lua-mods': 'game-documentation/programming/lua',
  'beamng/dev/modding/imgui-window-tutorial': 'game-documentation/programming/imgui',
  'beamng/lua-snippets': 'game-documentation/snippets/lua-snippets',
  'beamng/css-snippets': 'game-documentation/snippets/css-snippets',
  'beamng/imgui-snippets': 'game-documentation/snippets/imgui-snippets',
  'beamng/cef-snippets': 'game-documentation/snippets/cef-snippets',

  contributing: 'community/contributing'
}

const rewrites = docsLocales.reduce<Record<string, string>>((acc, locale) => {
  for (const [from, to] of Object.entries(legacyRewritePairs)) {
    acc[`${locale}/${from}`] = `${locale}/${to}`
  }
  return acc
}, {})

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
  head: [
    ['script', { defer: "true", src: 'https://analytics.beammp.com/api/script.js', 'data-site-id': '632c87f003fc', async: "true" }]
  ],
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
  rewrites,
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
