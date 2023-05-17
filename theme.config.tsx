import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>The Divine Reborn</span>,
  // banner: {
  //   key: 'lore',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  project: {
    link: 'https://github.com/mojiitek/documentation-public-site',
  },
  chat: {
    link: 'https://discord.gg/avqzCCR8',
  },
  docsRepositoryBase: 'https://github.com/mojiitek/documentation-public-site',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – The Divine Reborn'
    }
  },
  primaryHue: 155,
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
