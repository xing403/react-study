import { useParams } from "react-router-dom"

function Dynamic() {
  const param = useParams()
  console.log(param)
  return (
    <div>Dynamic</div>
  )
}

export default Dynamic




