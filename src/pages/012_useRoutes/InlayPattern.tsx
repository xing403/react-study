// 嵌套路由
// 使用 <Outlet /> 进行多级路由组件显示 => vue : <RouterView />

import { useRoutes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Dynamic from "./Dynamic"

const routes = [{
  path: '/',
  element: <Layout />,
  children: [{
    path: 'home',
    element: <Home name={""} />,
  }, {
    path: 'about',
    element: <About />,
  }, {
    path: 'dynamic/:id',
    element: <Dynamic />,
  }]
}]
export default function InlayPattern() {
  const route = useRoutes(routes)
  return (
    <div>
      <div>InlayPattern</div>
      {route}
    </div>
  )
}
