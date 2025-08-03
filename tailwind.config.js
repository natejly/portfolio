import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'navy': '#13294B',
        'cream': '#FFF0DB',
        'blue': '#1D96CD',
      },
      spacing: {
        '80': '320px',
      },
    },
  },
})
