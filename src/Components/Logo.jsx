import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center'>
    <div className='max-w-xs'>
  <img src={require('../content/logo.png')} alt="logo" />
  <div className='text-xl text-center font-semibold'>
     <h1>For the Shayar in you...</h1>
  </div>
    </div>
</div>
  )
}

export default Logo
