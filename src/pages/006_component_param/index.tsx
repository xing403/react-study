import P2C from "./001_P2C";
import C2P from "./002_C2P";
import R2C from "./003_R2C";

function ComponentParam() {
  return (
    <div>
      <div className="p2c">
        <div>组件通信 父组件给子组件传递参数</div>
        <P2C />
        <div>组件通信 子组件给父组件传递参数</div>
        <C2P />
        <div>组件通信 跨组件传递参数</div>
        <R2C />
      </div>
    </div>
  );
}


export default ComponentParam;
