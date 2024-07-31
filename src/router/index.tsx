import AutoImportDemo from "../pages/015_auto_import";

/**
 * React 路由 web 使用 react-router-dom 
 *    v5 使用 <Route to="/path" component={About} />
 *    v6 使用 <Route to="/path" element={<About />} />
 *            v5 <Switch />                   v6 <Routes />
 *            Switch 不一定要使用               Routes 一定要使用
 *            侧重类组件                        函数组件 大量的 hook
 *            WithRouter 普通组件转路由组件       useNavigate => useNavigate()
 * React 路由匹配规则 
 *  路径规则模糊匹配（v5默认）
 *    url: /a/b/c => <Route path="/a" /> || <Route path="/a/b" /> || <Route path="/a/b/c" /> 选择最符合的路径
 *  路径规则精确匹配（v6默认）
 *    url: /a/b/c => <Route path="/a/b/c" />
 *  路径大小写匹配 v5 默认不大小写匹配
 *    v6 <Route path="/about" caseSensitive={true} />
 * 路由重定向
 *  * v5 使用 <Redirect to="/about" /> 组件
 *  * v6 使用 <Route path="*" element={<Navigate to="/about" />} />
 *
 * 路由传参 params
 *  * v5 使用 <Route path="/about/:id" component={About} /> 
 *      => <Link to="/about/123" />{'About'}</Link>
 *    参数会在 props 中 props.match.params 中
 *
 *  * v6 函数式组件 使用 <Route path="/about/:id" element={<About />} /> 
 *      => <Link to={`/about/${id}`} />{'About'}</Link>
 *    获取 params 参数 => useParams()
 *
 * 路由传参 search => vue query
 *  * v5 使用 <Route path="/about?id=${}&title=${}" component={About} /> 
 *      => <Link to="/about?id=123&title=abc" />{'About'}</Link>
 *    参数会在 props 中 props.location.search 中  [使用 query-string 插件 进行 序列化]
 *
 *  * v6 使用 <Route path="/about?id=id=${}&title=${}" element={<About />} /> 
 *      => <Link to={`/about?id=${id}&title=${title}`} />{'About'}</Link>
 *    获取 search 参数 => useSearchParams()
 *
 * 路由传参 state
 *  * v5 使用 <Route path="/about" component={About} />
 *      => <Link to={{ pathname: '/about', state: {id: 123, title: 'abc'} }} >{'About'}</Link>
 *    参数会在 props 中 props.location.state 中
 *      F5 刷新页面 在 browser history模式 中 state 不丢失
 *
 *  * v6 使用 <Route path="/about" element={<About />} />
 *      => <Link to='/about' state={{id: 123, title: 'abc'}} >{'About'}</Link>
 *    获取 state 参数 => useLocation()
 * 路由 hook 在 类组件中 不可用, v6 版本之后官方推荐使用 函数组件 function (props){}
 * 
 * 一些 hook
 *    useInRouterContext() => 是否在路由上下文中，组件被路由包裹
 *    useLocation() => 获取当前路由的 location 对象
 *    useNavigate() => 返回一个函数，调用该函数可以跳转到指定路由
 *    useParams() => 获取路由参数
 *    useSearchParams() => 获取路由的 search 参数
 *    useNavigationType() => 获取进入当前路由的类型， push | pop | replace
 *    useOutlet() => 获取当前路由的 outlet
 *    useResolvedPath() => 获取路由的 pathname 和 search
 */
export default [{
  path: '/015_auto_import/:id',
  element: <AutoImportDemo />,
  meta: {
    title: 'auto-import demo',
    icon: 'icon-auto-import',
    order: 1,
  },
}]
