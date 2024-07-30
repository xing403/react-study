// 记录状态
import { useState } from "react";

export default function render(){
  let [count, setCount] = useState(0)
  return (
    <div>
      {/* 记录状态 */}
      {
        (() => {
          return (
            <div>
              <div>count: {count}</div>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count -1)}>-</button>
            </div>
          )
        })()
      }
    </div>
  )
}
