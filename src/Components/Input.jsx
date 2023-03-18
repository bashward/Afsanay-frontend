import React, { useState } from 'react'
import axios from 'axios';
import'animate.css'
import { FiPenTool } from "react-icons/fi";

const Input = () => {

const [val,Setval]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault()
  try {
    axios.post('https://afsanay-api-git-master-bashward.vercel.app/create',{
    text: val,
    likes: 0
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then((res)=>{
  console.log(res)
}) 
  } catch (err) {
  console.log(err)  
  }
Setval('')
}

  return (
    <div className='flex justify-center my-10 animate__animated animate__fadeInUp'>
    <div className='rounded-lg bg-stone-300 backdrop-blur-md shadow-xl'>
      <div className='p-10 flex flex-col'>
        <form onSubmit={handleSubmit}>
        <textarea value={val} onChange={(e)=>{Setval(e.target.value)}} type='text' cols="40" rows="8" placeholder='Pen down your thoughts...' className='rounded-lg p-3 border-2 resize-none border-gray-300 focus:outline-none focus:border-blue-500'></textarea>
        <div className='m-5 mb-0 flex justify-center'>
        <button type="submit" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><FiPenTool size={25}/></button>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Input

