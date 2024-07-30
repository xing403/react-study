function Parent() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <div>
      <Child onClick={handleClick} />
    </div>
  )
}

function Child({ onClick }: {
  onClick: () => void
}) {
  return (
    <div>
      <button onClick={() => onClick()}>click me</button>
    </div>

  )
}


function C2P() {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default C2P;
