import React from 'react'
import { Comment } from 'react-loader-spinner'
export default function Status({isLoading, status}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p style={{fontFamily:'Poppins, sans-serif'}}>
            {isLoading ? `Hold for a moment...${status|| 'uploading audio'}... `: 'Plese give a audio input '}
        </p>
        {isLoading && <Comment visible={true} height={40} width={40} ariaLabel='comment-loading' wrapperStyle={{}} wrapperClass='comment-wrapper' color='#fff' backgroundColor='#47D6B6' />}
    </div>
  )
}
