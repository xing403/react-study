// 自定义一个 auth hook

function useAuth(auth: string[] | string, type: 'and' | 'or' = 'or') {
  function or(userAuth: string[]) {
    if (typeof auth === 'string') {
      return userAuth.includes(auth)
    }
    return userAuth.reduce((pre, cur) => {
      return pre || auth.includes(cur)
    }, false)
  }

  function and(userAuth: string[]) {
    if (typeof auth === 'string') {
      return userAuth.includes(auth)
    }
    return userAuth.reduce((pre, cur) => {
      return pre && auth.includes(cur)
    }, true)
  }

  return {
    compare: type === 'and' ? and : or,
  }
}


export default useAuth;
