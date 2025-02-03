
'use client'
import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="isolate lg:px-8">
      <div
        aria-hidden="true"
        className="absolute -z-10 transform-gpu overflow-hidden blur-3xl "
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2  62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 2  6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/  rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[ca (50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-90  sm:text-7xl">
            Stay Organized. Achieve More.
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
           Plan, track, and complete your tasks with ease.Stay organized and boost your productivity  Secure & simple—your tasks, your way. Start today!
             </p>
        </div>
          {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] mb-10 -z-10 transform-gp overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2  62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 2  6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/ bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[7 1875rem]"
        />
      </div>
    </div>
   )
}

export default Hero
