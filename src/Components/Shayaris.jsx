import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Shayari from './Shayari'

const Shayaris = () => {


 const [shayaris,setShayaris]=useState([])
    
useEffect(()=>{
axios.get('https://afsanay-api-git-master-bashward.vercel.app/').then((res)=>{
  setShayaris(res.data)
})
},[shayaris])

  return (
    <div className='mx-20 my-[200px] flex'>
      {shayaris.map((shayari,index)=>{
        return <Shayari content={shayari} key={index}/>
      })}
    </div>
  )
}

export default Shayaris
