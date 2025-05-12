import React from 'react'
import LinkToHome from './LinkToHome'

const TitrCartLogin = ({ titleAuth, textAuth,BtnLink }) => {
  return (
    <div>
       <div className="flex justify-between items-center mb-6">
              <h1 className="font-bold text-2xl sm:text-3xl">{titleAuth}</h1>
              <div className="ml-2 rounded-3xl flex justify-center items-center">
                {BtnLink}
              </div>
            </div>

            <p className="mb-4 text-gray-600 text-sm text-right">{textAuth}</p>

    </div>
  )
}

export default TitrCartLogin
