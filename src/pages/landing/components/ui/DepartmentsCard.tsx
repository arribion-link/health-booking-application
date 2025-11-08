import type { JSX } from "react"
import "../../../../css/app.css"
type DepartmentsCardProp = {
    logo: JSX.Element,
    name: string
}

const DepartmentsCard = ({logo, name }:DepartmentsCardProp) => {
  return (
    <div className="department-card">
          <div>
              {logo}
          </div>
          <div>
              <h4>{ name }</h4>
          </div>
    </div>
  )
}

export default DepartmentsCard
