import React, { useState } from 'react'
import 'animate.css'
import axios from 'axios'

const Shayari = ({content}) => {

const [like,Setlike]=useState(content.likes)
const [clicked,SetClicked]=useState(false)

const handleClick=()=>{
if(clicked===false){
Setlike(like+1)
async function updateLike(){
  try{
    axios.post('https://afsanay-api-git-master-bashward.vercel.app/update',{
      id: content._id,
      inc: 1
    },{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }).then((res)=>{
      console.log(res)
    })
  }catch(err){
    console.log(err)
  }
}
updateLike()
SetClicked(true)
}
else{
Setlike(like-1)
async function updateLike(){
  try{
    axios.post('https://afsanay-api-git-master-bashward.vercel.app/update',{
      id: content._id,
      inc: 0
    },{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }).then((res)=>{
      console.log(res)
    })
  }catch(err){
    console.log(err)
  }
}
updateLike()
SetClicked(false)
}
}

  return (
    <div className='bg-white flex mr-20 p-4 shadow-md rounded-md max-w-md min-w-xs overflow-wrap'>
        <div>
      <p>{content.shayari}</p>
      <div className='flex justify-end mt-4'>
        <div className={`number ${like !== 0 ? 'animate__animated animated fadeInUp' : ''}`}>
        <p className='mr-3 pt-2 text-lg'>{like}</p>
        </div>
      <button className={`border-2 rounded-[20px] p-2 hover:bg-blue-500 hover:text-white ${clicked? 'focus:bg-blue-500 focus:text-white' : ''}`} onClick={handleClick}>Wah!</button>
      </div>
        </div>
    </div>
  )
}

export default Shayari
