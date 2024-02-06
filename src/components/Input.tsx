import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type= 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      {formatPrice &&
        <span className='absolute top-5 left-2 text-gray-700'>USD</span>
      }
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=''
        type={type}
        className={`
          w-full
          p-4
          pt-6 
          font-light
          border-2
          bg-white
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-red-500' : 'border-gray-300'}
          ${errors[id] ? 'focus:border-red-500' : 'border-gray-300'}
        `}
      />
      <label
        className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:translate-y-4
          ${errors[id] ? 'text-red-500' : 'text-gray-400'}
          `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input