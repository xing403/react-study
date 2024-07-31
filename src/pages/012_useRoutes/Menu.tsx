import { Link, NavLink } from 'react-router-dom'
/**
 * Link 和 NavLink 区别
 * 1. NavLink 默认添加 active 样式
 * 2. v5版本NavLink activeClassName 和 activeStyle 可以自定义样式
 *    v6版本NavLink 使用 className 动态自定义 ({isActive, isPending, isTransitioning}) => string
 */
export default function Menu() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to={'/home'}>to home</Link>
      <Link to={'/about'}>to about</Link>
      <NavLink to={'/home'}
        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "is-active" : ""}
      >to home</NavLink>
      {
        Array.from({ length: 4 }).map((_, index) => {
          return (
            <NavLink
              replace
              key={index}
              to={`/dynamic/${index + 1}`}
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "is-active" : ""}
            >
              dynamic {index + 1}
            </NavLink>
          )
        })
      }
    </div>
  )
}
