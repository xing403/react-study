import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-auto-import
export default function createAutoImport() {
  return AutoImport({
    imports: [
      'react',
      'react-router-dom',
    ],
    dts: 'src/types/auto-import.d.ts',
    dirs: [
      './src/composables',
    ],
  })
}
