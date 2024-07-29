import React from "react";

// 通过类的形式创建一个组件， 通过构造函数传参形式接收属性参数
class ClassComponent extends React.Component {
  constructor(props: any) {
    super(props)
  }

  click = () => {
    console.log('this is event of button clicked')
  }
  
  render(): React.ReactNode {
    return (
      <button onClick={this.click}>this is button</button>
    )
  }
}

export default ClassComponent
