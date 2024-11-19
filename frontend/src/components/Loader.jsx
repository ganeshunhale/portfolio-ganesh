import React from 'react'
import { CircleLoader, BeatLoader,ClockLoader,MoonLoader,PuffLoader } from 'react-spinners'

const Loader = ({ addclassName }) => {
  return (
    <div className="flex justify-center items-center relative h-screen w-full">
      <PuffLoader size={300}  color="#5271ff" loading={true} className={`duration-00 !z-20`} />
      <div className="z-30 text-primary absolute blink top-[48%] md:left-[50%%] text-2xl inline-flex items-center gap-1">
        <p>Loading</p>
        <BeatLoader color="#5271ff" size={7}   className='pt-3 text-sm' />
      </div>
    </div>
  )
}

export default Loader
