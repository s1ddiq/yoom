'use client'

import React from 'react'
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full flex-col'>
        <Image
            src="/icons/loading-circle.svg"
            alt="Loading"
            width={50}
            height={50}
        />

            {/* <div className="loader flex items-center">
            <span className="bar inline-block w-[3px] h-5 bg-white/50 rounded-[10px] animate-scale-up4"></span>
            <span className="bar inline-block w-[3px] h-[35px] bg-white/50 rounded-[10px] mx-[5px] animate-scale-up4 animation-delay-[250ms]"></span>
            <span className="bar inline-block w-[3px] h-5 bg-white/50 rounded-[10px] animate-scale-up4 animation-delay-[500ms]"></span>
            </div> */}

    </div>
  )
}

export default Loader