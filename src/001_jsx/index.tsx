// 基础的 tsx 语法
// 所暴露的 render 函数 必须返回有唯一根节点的 ReactNode 如下： 此方法会渲染出一个 div
// 如果不需要这个 div 需要返回 匿名标签: <> </>
function render() {
  return (
    <div>
      {/* 静态字符串 */}
      <div>this is a div tag 静态字符串</div>
      {/* 动态字符串 */}
      <div>{'this is a div tag 动态字符串'}</div>
      {/* class 类名 style样式 */}
      <div className="custom-class" style={{ color: 'red' }}>class 类名 style样式</div>
      {/* 动态类名 */}
      <div className={'dynamic-class'} style={{ color: 'red' }}> 动态类名</div>
    </div>
  )
}

export default render
