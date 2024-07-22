// 定义一个事件处理函数
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log('event 事件', event)
}

function handleCustomClick(num: number) {
  console.log('num', num)
}

function render() {
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => handleCustomClick(1)}>click me</button>
      <button onClick={() => handleCustomClick(2)}>click me</button>
    </div>
  )
}


export default render
