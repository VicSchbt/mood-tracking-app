// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-reddit)', 'sans-serif'],
          },
          fontSize: {
            'text-preset-1': ['52px', { lineHeight: '140%', letterSpacing: '-0.02em' }],
            'text-preset-1-mobile': ['46px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
        
            'text-preset-2': ['40px', { lineHeight: '120%', letterSpacing: '-0.3px' }],
            'text-preset-2-mobile': ['32px', { lineHeight: '120%', letterSpacing: '-0.3px' }],
        
            'text-preset-3': ['32px', { lineHeight: '140%', letterSpacing: '-0.3px' }],
            'text-preset-3-mobile': ['28px', { lineHeight: '130%', letterSpacing: '-0.3px' }],
        
            'text-preset-4': ['24px', { lineHeight: '140%', letterSpacing: '0px' }],
            'text-preset-4-regular': ['24px', { lineHeight: '140%', letterSpacing: '0px' }],
        
            'text-preset-5': ['20px', { lineHeight: '140%', letterSpacing: '0px' }],
        
            'text-preset-6': ['18px', { lineHeight: '120%', letterSpacing: '0px' }],
            'text-preset-6-italic': ['18px', { lineHeight: '130%', letterSpacing: '0px' }],
        
            'text-preset-7': ['15px', { lineHeight: '140%', letterSpacing: '-0.3px' }],
        
            'text-preset-8': ['13px', { lineHeight: '140%', letterSpacing: '0px' }],
        
            'text-preset-9': ['12px', { lineHeight: '140%', letterSpacing: '0px' }],
          },
        
          fontWeight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
          },
      colors: {
        // Neutral scale
        neutral: {
          0: '#FFFFFF',
          200: '#CBCD D0',
          300: '#9393B7',
          600: '#57577B',
          900: '#12114D',
        },

        // Blue scale
        blue: {
          100: '#E0E6FA',
          200: '#C7D3F7',
          300: '#89CAFF',
          600: '#4865DB',
          700: '#2A4CD5',
        },

        // Red scale
        red: {
          300: '#FFB9B9',
          700: '#E60013',
        },

        // Other scales
        indigo: {
          200: '#B8B1FF',
        },
        green: {
          300: '#89E780',
        },
        amber: {
          300: '#FFC97C',
        },

        // Gradient reference (for background-image usage)
        gradient: {
          light: 'linear-gradient(180deg, #F5F5FF 72.99%, #E0E0FF 100%)',
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(180deg, #F5F5FF 72.99%, #E0E0FF 100%)',
      },
      spacing: {
        '0': '0px',
        '025': '2px',
        '050': '4px',
        '075': '6px',
        '100': '8px',
        '125': '10px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
        '600': '48px',
        '800': '64px',
        '1000': '80px',
      },
      borderRadius: {
        '0': '0px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        'full': '999px',
      },
    },
  },
  plugins: [],
}

export default config
