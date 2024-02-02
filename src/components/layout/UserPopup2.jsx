import React from 'react'
import Button from '../Button'

function UserPopup2() {
  return (
    <div className='w-[200px] h-[100px]'>
      <Button text='Sign Up' className='w-full h-1/2'/>
      <Button text='Log In' className='w-full h-1/2 bg-transparent text-primary font-regular border border-[#F0F0F0]'/>
    </div>
  )
}

export default UserPopup2