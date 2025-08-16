import { extendTheme } from "@chakra-ui/react"

export const system = extendTheme({
  colors: {
    section: {
      dark: "#000000",
      light: "#ffffff",
      darkText: "#ffffff",
      lightText: "#1a202c",
    },
    brand: {
      50: '#fff5f0',
      100: '#fed7aa',
      200: '#fdba74',
      300: '#fb923c',
      400: '#f97316',
      500: '#f56500',
      600: '#dd6b20',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  },
  semanticTokens: {
    colors: {
      sectionBg: { default: "section.light", _dark: "section.dark" },
      sectionText: { default: "section.lightText", _dark: "section.darkText" },
      buttonBg: { default: "brand.500", _dark: "brand.400" },
      buttonText: { default: "section.lightText", _dark: "section.darkText" },
    },
  },
  styles: {
    global: {
      body: {
        bg: "sectionBg",
        color: "sectionText",
      },
    },
  },
})

