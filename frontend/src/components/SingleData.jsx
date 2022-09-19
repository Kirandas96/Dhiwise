import React from 'react'

export const SingleData = ({index,e}) => {
  return (
    <>
      <td>Level{index+1}:{e.value}</td>
    </>
  )
}
