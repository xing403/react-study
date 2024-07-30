import './button.css'
import { useState } from 'react'
// 定义组件 使用大驼峰命名
function Button() {
  let [state, setState] = useState(false)
  return (
    <>
      <button className={"custom-button " + (state ? 'active' : '')} onClick={() => setState(!state)}>按钮</button>
    </>
  )
}

export default Button
