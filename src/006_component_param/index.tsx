import P2C from "./001_P2C";
import C2P from "./002_C2P";
function ComponentParam() {
  return (
    <div>
      <div className="p2c">
        <div>组件通信 父组件给子组件传递参数</div>
        <P2C />
        <div>组件通信 子组件给父组件传递参数</div>
        <C2P />
      </div>
    </div>
  );
}


export default ComponentParam;
