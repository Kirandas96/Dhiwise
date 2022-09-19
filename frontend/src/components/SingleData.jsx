import React, { useState } from 'react'

export const SingleData = ({id,e,handleEdit}) => {
  const[hover,setHover]=useState(false)
  const handleMouseEnter=()=>{
    setHover(true)
  }
  const handleMouseLeave=()=>{
    setHover(false)
  }
  return (
    <>
      <td  style={{backgroundColor:hover ?'black':`rgb(${88+id*30}, 2, 2)`,
      color:hover?"black":"white"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={()=>handleEdit(e)}>Level{id}:{e.value}
      </td>
    </>
  )
}
