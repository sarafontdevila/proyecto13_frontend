/*import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
       
        brand: {
          50: { value: '#fff5f0' },
          100: { value: '#fed7aa' },
          200: { value: '#fdba74' },
          300: { value: '#fb923c' },
          400: { value: '#f97316' },
          500: { value: '#f56500' }, 
          600: { value: '#dd6b20' }, 
          700: { value: '#c2410c' },
          800: { value: '#9a3412' },
          900: { value: '#7c2d12' },
        },
        
        section: {
          dark: { value: '#000000' },
          light: { value: '#ffffff' },
          darkText: { value: '#ffffff' },
          lightText: { value: '#1a202c' },
        }
      },
      fonts: {
        heading: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' },
        body: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' },
      }
    },
    semanticTokens: {
      colors: {
        primary: {
          default: { value: '{colors.brand.500}' },
          _dark: { value: '{colors.brand.400}' }
        },
        accent: {
          default: { value: '{colors.brand.500}' },
          _dark: { value: '{colors.brand.400}' }
        }
      }
    }
  },
  globalCss: {
    
    body: {
      bg: 'white',
      color: 'gray.800'
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)*/


import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark", 
  useSystemColorMode: false, 
};

const theme = extendTheme({
  config,
  colors: {
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
    section: {
      dark: '#000000',
      light: '#ffffff',
      darkText: '#ffffff',
      lightText: '#1a202c',
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: 'brand.500',
        _dark: 'brand.400',
      },
      accent: {
        default: 'brand.500',
        _dark: 'brand.400',
      },
    },
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800'
      },
    },
  },
});

export default theme;
