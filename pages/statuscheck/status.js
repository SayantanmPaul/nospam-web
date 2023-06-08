import React from 'react'
import { Comment } from 'react-loader-spinner'
export default function Status({isLoading, status}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='font-bold lg:text-lg text-sm tracking-normal text-[#256D85]' style={{fontFamily:'Poppins, sans-serif'}}>
            {isLoading ? `Hold for a moment...${status|| 'uploading audio'}... `: (
                <p className=' font-bold lg:text-lg text-sm tracking-normal text-[#256D85]' style={{fontFamily:'Poppins, sans-serif'}}>
                    Analysis result will be visible here...
                </p>
            )}
        </p>
        {isLoading && <Comment visible={true} height={40} width={40} ariaLabel='comment-loading' wrapperStyle={{}} wrapperClass='comment-wrapper' color='#fff' backgroundColor='#1FAB89' />}
    </div>
  )
}
