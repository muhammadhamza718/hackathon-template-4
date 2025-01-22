import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-800' />
    </div>
  )
}
