import React from 'react'
import PixelButton from './components/primary-button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col dynamic-gap-6 items-center justify-center dynamic-padding">
      <h1 >404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <PixelButton cta={"Go back home"} link={"/"}/>
    </main>
  )
}