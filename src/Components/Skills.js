import { Progress } from '@mantine/core'
import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className='text-center'>
        <p className='text-stone-600'>See my Skills</p>
        <h1 className='sm:text-3xl text-4xl font-semibold underline text-amber-300'>
          Skills & Experience
        </h1>
      </div>
    <div className='h-full sm:h-screen flex justify-center'>
      <div className='flex flex-col sm:flex-row justify-center pt-24 px-8 text-left'>
        <div className='sm:w-2/5 pt-4 sm:-ml-5'>

          <p className='my-2'>
            Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
          </p>
          <p className='my-2'>
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
          <p className='my-2'>
            I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
          </p>

        </div>
        <div className='sm:w-2/4 w-full'>
          <div className='pb-6'>
            <h3 className='text-xl font-medium text-center text-white my-1'>HTML</h3>
            <Progress color="yellow" size="xs" value={75} />
            <h3 className='text-xl font-medium text-center text-white my-1'>React</h3>
            <Progress color="yellow" size="xs" value={80} />
            <h3 className='text-xl font-medium text-center text-white my-1'>CSS</h3>
            <Progress color="yellow" size="xs" value={85} />
            <h3 className='text-xl font-medium text-center text-white my-1'>Tailwind</h3>
            <Progress color="yellow" size="xs" value={90} />
          </div>
          <div className='gap-2 pb-10 sm:flex'>
            <div className='w-full bg-gray-900 sm:w-2/4 my-2'>
              <h1 className='p-4 text-xl text-white'>Frontend developer</h1>
              <p className='px-4 pb-4'>Award-winning Content Marketing Agency specialises in creating and sharing engaging content.</p>
            </div>
            <div className='w-full sm:w-2/4 bg-gray-900 my-2'>
              <h1 className='p-4 text-xl text-white'>Full stack developer</h1>
              <p className='px-4 pb-4'>Creative brand, website design and development studio that can bring your online business dreams to life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills