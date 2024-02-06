'use client'

import Input from '@/components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from '@/components/Button'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: {
    errors
  } } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  
  })

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true)
    try {
      const data = signIn('credentials', body)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
      <form
      onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 justify-center min-w-[350px]'
      >
        <h1 className='text-2xl'>Login</h1>
        <Input
          id="email" 
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="password" 
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="Login" />
        <div>
          <p className='text-gray-400'>
            Not a member?{" "}
            <Link href="/auth/register" className='text-black'>
              Register
            </Link>
          </p>
        </div>
      </form>

    </section>
  )
}

export default LoginPage