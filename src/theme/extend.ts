import { extendTheme } from '@chakra-ui/vue-next';
import { mode } from '@chakra-ui/vue-theme-tools';

const customTheme = extendTheme({
  fonts: {
    heading: `Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  shadows: {
    outline: `0 0 0 4px rgba(47, 133, 90, 0.62)`,
    search:
      '0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2)',
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
    }),
  },
  colors: {
    emerald: {
      DEFAULT: '#30855F',
      '50': '#B6E5D0',
      '100': '#A3DEC4',
      '200': '#7ED0AB',
      '300': '#58C393',
      '400': '#3EAA7A',
      '500': '#30855F',
      '600': '#226044',
      '700': '#153A29',
      '800': '#07150F',
      '900': '#000000',
    }
  },
  components: {
    Heading: {
      baseStyle: {
        bgGradient: "linear(to-l, emerald.500, teal.500)",
        bgClip: "text"
      }
    }
  }
})

export default customTheme