import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound: React.FunctionComponent = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Image src='/not-found.png' height={300} width={200} alt='not found image'/>
        <span className='sm:text-8xl text-4xl'>Error: 404</span>
        <span>Looks like you are lost. Don't worry I got you!</span>
        <Link href="../" className='text-blue-500'>Click here to go back</Link>
    </div>
  )
}

export default NotFound