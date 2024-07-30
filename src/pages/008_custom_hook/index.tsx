import { useState } from "react";
import useAuth from "./useAuth";

function CustomHook() {
  const { compare } = useAuth(['admin', 'editor'], 'or')
  const [auth, setAuth] = useState<string>('admin')
  return (
    <div>
      <div><button onClick={() => setAuth(auth == 'admin' ? 'anonymity' : 'admin')}>更新权限</button></div>
      <div>{compare([auth]) ? '有权限' : '无权限'}</div>
    </div>
  )
}


export default CustomHook;
