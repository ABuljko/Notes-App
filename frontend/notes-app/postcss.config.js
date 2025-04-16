import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import { lazy } from 'react'

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
}
