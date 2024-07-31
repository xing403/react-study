// auto-import demo

function AutoImportDemoDemo() {
  const param = useParams()
  const { id } = (param || { id: '0' })
  const idClassName = (id?: number | string): string => {
    return Number(id) && Number.isInteger(Number(id)) ?
      Number(id) % 2 ? 'text-green' : 'text-blue'
      : 'text-red'
  }

  return (
    <div>
      <div className={`${idClassName(id)}`}>id is: {id}</div>
    </div>
  )
}


export default AutoImportDemoDemo
