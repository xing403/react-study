// 跨层传递参数

import { createContext, useContext, useState } from "react"

const Context = createContext('')

function Root() {
  const [value, setValue] = useState('hello world')
  return (
    <Context.Provider value={value}>
      <Parent />
    </Context.Provider>
  )
}

function Parent() {
  return (
    <div>
      <div>this is Parent component</div>
      <Child />
    </div>
  )
}

function Child() {
  const value = useContext(Context)
  return (
    <div>this is child component, { value }</div>
  )
}


function R2C() {
  return (
    <div>
      <Root />
    </div>
  )
}

export default R2C;
