import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import theme from '../src/styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'main-bg',
    values: [
      {
        name: 'main-bg',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
