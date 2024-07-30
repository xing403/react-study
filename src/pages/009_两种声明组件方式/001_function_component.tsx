
const click = () => {
  console.log('the button is clicked')
}
// 通过 function 方式声明 组件 通过 props 进行参数传递
function FunctionComponent(props: any) {

  return (
    <button onClick={click}>click me</button>
  )
}


export default FunctionComponent
