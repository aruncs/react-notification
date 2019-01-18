import React from "react"

function NameCard(props){
  return (
    <div>
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
      <hr/>
    </div>
  )
}

export default NameCard
