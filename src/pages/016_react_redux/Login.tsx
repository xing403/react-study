import { Button, Checkbox, Form, Input, Image, Tag, notification } from "antd"
import { useSelector, useDispatch } from 'react-redux'
import {
  login as userLogin,
  useUserStore,
  logout as userLogout,
  UserSliceState,
} from "./../../store/modules/userSlice"

function Login() {
  const dispatch = useDispatch()
  const [api, contextHolder] = notification.useNotification();

  const userStore = useSelector(useUserStore) as UserSliceState
  useEffect(() => {
    if (userStore.isLogin) {
      api.success({ message: '登录成功', description: `Welcome ${form.username}`, placement: 'topRight' })
    }
  }, [userStore.isLogin])
  console.log(userStore)
  const [form, setForm] = useState({
    username: '',
    password: '',
    isRemember: false
  })

  const handleLogin = () => {
    if (!userStore.isLogin)
      dispatch(userLogin())
  }

  const handleLogout = () => {
    if (userStore.isLogin)
      dispatch(userLogout())
  }

  return (
    <div className="bg-gray-400 h-full flex flex-row justify-end">
      {contextHolder}
      <div className="flex-1 h-full flex flex-col justify-center items-center gap-5">
        <Image src="/vite.svg" width={200} className="hover:animate-spin" preview={false} />
        <div className="text-center">
          {
            userStore.isLogin
              ? <Tag color="blue" className="cursor-pointer" onClick={handleLogout}>已登录</Tag>
              : <Tag color="green">未登录</Tag>
          }
        </div>
      </div>
      <div className="h-full p-x-10 bg-white flex flex-col justify-center">
        <Form className="w-300px" layout='vertical'>
          <Form.Item name="username" label="用户名" rules={[{ required: true }]}>
            <Input onChange={(e) => setForm({ ...form, username: e.target.value })} />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true }]}>
            <Input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </Form.Item>
          <Form.Item name="rememberMe" >
            <Checkbox checked={form.isRemember} onChange={(e) => setForm({ ...form, isRemember: e.target.checked })}>记住账号</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" type="primary" onClick={handleLogin}>登录</Button>
          </Form.Item>
          {/* <div>{status}</div> */}
        </Form>
      </div>

    </div>
  )
}

export default Login
