// 组件传参 父子组件传参 parent component to child component

function Child({ message }: { message: string }) {
  return (
    <div>this is child component, {message}</div>
  )
}

function Parent() {
  return (
    <div>
      <div>this is parent component</div>
      <Child message={'hello world'} />
    </div>
  )
}


function P2C() {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default P2C
