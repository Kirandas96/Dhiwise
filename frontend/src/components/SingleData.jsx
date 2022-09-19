import React from 'react'

export const SingleData = ({id,e,handleEdit}) => {
  
  return (
    <>
      <td style={{backgroundColor:`rgb(${88+id*30}, 2, 2)`}} onClick={()=>handleEdit(e)}>Level{id}:{e.value}
      </td>
    </>
  )
}
