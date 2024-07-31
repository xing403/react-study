import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // react 根节点组件
import './index.css' //  全局样式
import 'virtual:uno.css'
// 定义一个 Provider 组件 引入 store
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'

// <React.StrictMode> react 严格模式 对内部的组件进行严格检查
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
