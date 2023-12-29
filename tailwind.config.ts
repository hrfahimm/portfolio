import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  boxShadow: {
    before:'-10px 10px 0 #fff',
    before2: '-10px -10px 0 #fff',
    after: '-10px 10px 0 #fff',
    after2: '-10px 10px 0 #232949',


  },
  colors: {
    
    
  }
,
  plugins: [],
  darkMode:'class'
}
export default config
