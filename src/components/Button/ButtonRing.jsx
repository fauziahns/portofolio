import React from 'react'

export default function ButtonRing({text}) {
  return (
    <div>
      <a href="#portofolio">
      <button type="button" class="text-white hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:white dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        {text}
        </button> </a>
    </div>
  )
}
