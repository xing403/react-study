import type { PluginOption } from 'vite'
import useUnoCSS from "./unocss";
import react from '@vitejs/plugin-react-swc'
import createAutoImport from './auto-import';
export default function usePlugins() {
  const plugins: (PluginOption | PluginOption[])[] = [react()]
  plugins.push(useUnoCSS())
  plugins.push(createAutoImport())

  return plugins
}
