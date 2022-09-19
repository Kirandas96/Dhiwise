import React, { useEffect, useState } from 'react'
import axios from "axios"
import { SingleData } from './SingleData'
export const MainTable = () => {
const [data,setData]=useState([])
const[edit,setEdit]=useState({})
    useEffect(() => {
    fetchData()
    }, [])
    
    const fetchData=()=>{
        axios.get("https://dhiwisetask.herokuapp.com/table")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    const handleEdit=(e)=>{
setEdit({...edit,level:e.level,value:e.value,id:e.id})
    }
    const handlePatch=()=>{
      axios.patch("https://dhiwisetask.herokuapp.com/table?id="+edit.id,{value:edit.value,level:edit.level})
      .then((res)=>{
        fetchData()
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
            {el.data?.map((e,ind)=>{
              return(<SingleData key={ind} id={el._id} e={e} handleEdit={handleEdit}/>)
            })}
          </tr>
          )
        })}
        </tbody>
        </table>
      </div>
      <div>
        <label >Level</label>
        <input type="text"  value={edit.level} onChange={(e)=>setEdit({...edit,level:e.target.value})}/>
        <label >Data</label>
        <input type="text" value={edit.value} onChange={(e)=>setEdit({...edit,value:e.target.value})}/>
        <button onClick={()=>handlePatch()}>Edit</button>
      </div>
    </div>
  )
}
