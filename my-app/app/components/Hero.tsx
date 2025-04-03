import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Manage your Project</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link className='btn btn-primary' href="/sign-up">Get Started</Link>
    </div>
  </div>
</div>
  )
}

export default HeroSection