import React from 'react'

export const HeaderSection = ({text, handleClick}) => {
  return (
    <div className="flex flex-row justify-between">
        <span className="font-dm-sans text-lg font-bold leading-6 text-custom-dark-gray">
          {text}
        </span>
        <span className="font-dm-sans text-sm font-bold leading-6 text-custom-gray">
          See All
        </span>
      </div>
  )
}
