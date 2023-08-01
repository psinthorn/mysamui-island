"use client"
import { CustomeButtonProps } from '@/types'
import React from 'react'

const CustomeButton = ({ title, containerStyles, handleClick, btnType}: CustomeButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType}
        className={`text-gray-800 custom-btn m-1 hover:text-blue-800 ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomeButton