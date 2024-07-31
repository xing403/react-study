import { useRoutes } from "react-router-dom"

// 使用 useRoutes 尽心路由组件渲染
function UseRoutesDemo() {
  const routes = useRoutes([{
    path: '/',
    element: <div>home</div>
  }, {
    path: '/about',
    element: <div>about</div>
  }, {
    path: '/user',
    element: <div>user</div>
  }])
  return (
    <div>
      {routes}
    </div>
  )
}
/**
 * 结果=>
 * <Routes>
 *    <Route path="/" element={<div>home</div>} /> 
 *    <Route path="/about" element={<div>about</div>} />
 *    <Route path="/user" element={<div>user</div>} />
 * </Routes>
 */

export default UseRoutesDemo
