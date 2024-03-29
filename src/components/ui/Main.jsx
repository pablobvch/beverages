import React from 'react'

export const Main = ({children}) => {
  return (
    <main className="min-h-screen mt-10 ml-6 mr-6">
        <div>{children}</div>
    </main>
  )
}
