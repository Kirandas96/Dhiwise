import React, { useEffect, useState } from 'react'
import axios from "axios"
import { SingleData } from './SingleData'
export const MainTable = () => {
const [data,setData]=useState([])
    useEffect(() => {
    fetchData()
    }, [])
    
    const fetchData=()=>{
        axios.get("https://fakeservermasai.herokuapp.com/api/levelData")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }
  return (
    <div>MainTable
      <div>
        <table>
        <tbody>
        {data.map((el,index)=>{
          return(
            <tr key={index} style={{border:"1px solid"}} >
            {el?.map((e,ind)=>{
              return(<SingleData key={ind} index={index} e={e}/>)
            })}
          </tr>
          )
        })}
        </tbody>
        </table>
      </div>
    </div>
  )
}
