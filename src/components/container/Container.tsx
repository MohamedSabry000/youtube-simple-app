import React from 'react'
import './Container.css'


type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      {children}
    </div>
  )
}