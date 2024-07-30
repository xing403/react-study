import { useEffect, useState } from "react"

function ajax() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: '张三' },
        { id: 2, name: '李四' }
      ])
    }, 2000)
  })
}

console.log(1)

// useEffect 事件是由 渲染 触发 vue watch，watchEffect 类似  
/**
 * 依赖项：
 * 1. 无依赖项 -> 组件渲染完成之后执行 + 组件更新之后执行
 * 2. 空依赖项 -> 组件渲染完成之后执行
 * 3. 依赖项 -> 组件渲染完成之后执行 + 依赖项更改之后执行 
 */

function UseEffectDemo() {
  console.log(2)
  const [list, setList] = useState<any>([])
  useEffect(() => {
    ajax().then(res => {
      console.log(4)
      setList(res)
    })
  }, [])
  
  useEffect(() => { // vue onUnMounted
    const timer = setInterval(() => {
      console.log(5)
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  }, [])


  console.log(3)

  return (
    <div>
      <div>UseEffectDemo</div>
      <ul>
        {
          list.map((item: any) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}


export default UseEffectDemo;
