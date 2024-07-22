import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // react 根节点组件
import './index.css' //  全局样式

// <React.StrictMode> react 严格模式 对内部的组件进行严格检查
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
