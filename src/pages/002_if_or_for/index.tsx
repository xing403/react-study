// 条件渲染
function ifRender() {
  return (
    <div>
      { /* 条件渲染 之 && */}
      {true && <div>使用 && 进行渲染</div>}
      {/* 条件渲染 之 三元运算 */}
      {true ? <div>true</div> : <div>false</div>}
      {/* 条件渲染 之 switch */}
      {
        (() => {
          let status = true
          switch (status) {
            case true:
              return <div>switch 判断 true</div>
          }
        })()
      }
      {/* 条件渲染 之 if */}
      {
        (() => {
          let status = true
          if(status)
            return <div>if 判断 true</div>
        })()
      }

    </div>
  )
}

function loopRender(){
  return (
    <div>
      {/* 循环渲染 */}
      {
        Array.from({ length: 3 }).map((_, index) => {
          return <div key={index}>index --- {index}</div>
        })
      }
      {
        (()=>{
          let len = 3,arr = [(<div>for 循环渲染</div>)]
          for(let i = 0; i < len; i++) {
            arr.push(<div key={i}>index --- {i}</div>)
          }
          return arr
        })()
      }

    </div>
  )
}


function render() {
  return (
    <div>
      { ifRender() }
      { loopRender() }
    </div>
  )
}

export default render
