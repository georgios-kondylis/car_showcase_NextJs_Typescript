"use client";
import React from 'react'
import { CustomButtonProps } from '@/Types';

const CustomButton = ({title, containerStyles, handleClick, btnType} : CustomButtonProps) => {
  return (
    <button
     disabled={false}
     type={btnType || 'button'}
     className={`custom-btn ${containerStyles}`}
     onClick={() => {}}
    >

      <span>
        {title}
      </span>
    </button>
  )
}

export default CustomButton