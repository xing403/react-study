import React from "react";
import ShowContent from "./ShowContent";
// 关于 React 组件生命周期的方法


class Counter extends React.Component {
  constructor(props: any) {
    super(props)
  }
  // 定义 state 
  state = { count: 10 }
  // vue beforeMounted
  // React 16 支持 React 18 不被支持
  // componentWillMount(): void {
  //   console.log('当组件将要挂载时执行')
  // }

  // vue onMounted
  componentDidMount(): void {
    console.log('当组件挂载之后执行')
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('是否应该更新组件')
    console.log('return true 执行更新')
    console.log('return false 阻止更新')
    return true
  }
  // React 16 支持 React 18 不被支持
  
  // componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
  //   console.log("componentWillReceiveProps")
  // }
  // React 16 支持 React 18 不被支持
  // componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
  //   console.log('组件将要更新')
  // }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('组件更新后执行')
  }
  onAdd = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  onSubtract = () => {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }
  // vue onDestroyed
  componentWillUnmount(): void {
    console.log('组件将要卸载')
  }
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log('组件渲染之后更新之前执行 getSnapshotBeforeUpdate')
    return false
  }

  static getDerivedStateFromProps(nextProps: Readonly<{}>, prevState: Readonly<{}>): {} | null {
    console.log('getDerivedStateFromProps')
    return null
  }
  render(): React.ReactNode {
    console.log('组件进行了render')
    const { count } = this.state
    return (
      <div>
        <button onClick={this.onSubtract}>-</button>
        <ShowContent num={count} />
        <button onClick={this.onAdd}>+</button>
      </div>
    )
  }
}


export default Counter
