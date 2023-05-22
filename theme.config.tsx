import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>The Divine Reborn</span>,
  banner: {
    key: 'site-released',
    text: (
      <a href="https://mojiitek.com" target="_blank">
        🎉 Mojiitek.com is released. Read more →
      </a>
    )
  },
  project: {
    link: 'https://github.com/mojiitek/documentation-public-site',
  },
  chat: {
    link: 'https://discord.gg/avqzCCR8',
  },
  docsRepositoryBase: 'https://github.com/mojiitek/documentation-public-site/blob/main',
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
    text: 'The Divine Reborn',
  },
}

export default config
