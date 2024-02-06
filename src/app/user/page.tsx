
import React from 'react'
import { getCurrentUser } from '../actions/getCurrentUser'

const UserPage = async () => {

  const userData = await getCurrentUser()


  return (
    <div>page</div>
  )
}

export default UserPage