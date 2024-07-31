// Routes 是 v6版本写法， V5版本使用 Switch 提高路由效率
import {
  Route,
  Routes,
} from 'react-router-dom'

import Menu from './Menu'
import HomePage from './Home'
import AboutPage from './About'
import DynamicPage from './Dynamic'
import NotFound from '../../components/NotFound'

export default function Layout() {
  return (
    <>
      <Menu />
      <div>Layout</div>
      <Routes>
        <Route path="/home" element={<HomePage name={'home'} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dynamic" element={<DynamicPage />} >
          <Route path="error" element={<NotFound />} />
          <Route path=":id" element={<DynamicPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
