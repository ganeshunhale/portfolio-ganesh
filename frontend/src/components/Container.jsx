import React from 'react'

const Container = ({children,className='',reqPadding=false}) => {
  return (
    <div className={`container px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16 mx-auto ${className} ${reqPadding && 'pt-4 lg:pt-28 '}`}>
      {children}
    </div>
  )
}

export default Container
