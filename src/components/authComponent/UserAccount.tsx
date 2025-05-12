import Link from 'next/link'
import React from 'react'

const UserAccount = ({account,userid,SrcLink}) => {
  return (
    <>
        <p className="mt-6 text-gray-500 text-sm text-center">
              {account}{" "}
            <Link href={SrcLink} className="text-blue-500 underline">
               {userid}
            </Link>
            </p>
    </>
  )
}

export default UserAccount






