import type { PluginOption } from 'vite'
import useUnoCSS from "./unocss";
import react from '@vitejs/plugin-react-swc'
export default function usePlugins() {
  const plugins: (PluginOption | PluginOption[])[] = [react()]
  plugins.push(useUnoCSS())

  return plugins
}
