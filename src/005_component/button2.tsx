function Button2({ children, desc }: any) {
  console.log(children)
  return (
    <>
      <div>
        <button className={"custom-button"}>{children}</button>
        {desc && <div style={{ color: 'red' }}>{desc}</div>}
      </div>
    </>
  )
}


export default Button2
