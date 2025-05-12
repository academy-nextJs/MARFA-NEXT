import { Divider } from '@heroui/divider'
import React from 'react'

const LineOrLogin = () => {
  return (
    <div className="flex items-center gap-2 my-4">
    <Divider className="flex-grow w-1/3" />
    <p className="text-gray-500 text-sm">یا</p>
    <Divider className="flex-grow w-1/3" />
  </div>
  )
}

export default LineOrLogin
