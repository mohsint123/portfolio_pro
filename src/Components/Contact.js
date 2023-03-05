import { Input } from '@mantine/core'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='h-screen px-6'>
      <div className='text-center'>
        <p className='text-stone-600'>Get in Touch</p>
        <h1 className='text-3xl font-semibold text-amber-300 underline py-3'>Contact</h1>
      </div>
      <div className='py-4'>
        <p className='text-lg font-bold'>Message Me</p>
        <Input className='py-2' placeholder='Name'></Input>
        <Input className='py-2' placeholder='Email'></Input>
        <Input className='py-2' placeholder='Subject'></Input>
        <Input className='py-2' placeholder='Message'></Input>
        <button className='px-4 py-2 text-gray-500 on bg-amber-300 rounded-full'>
          Send Message
        </button>
      </div>
      <div className='pt-10'>
        <h3 className='text-white font-medium text-xl py-2'>Contact Information</h3>
        <p className='pb-2'>Open for opportunities. Let's connect and build something awesome together!</p>
      </div>
      <div>
        <FaUserAlt className='text-2xl text-white' />
        
      </div>

    </div>
  )
}

export default Contact