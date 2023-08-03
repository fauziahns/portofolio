import React from 'react'

export default function CardContact() {
  return (
    <div className='justify-center flex p-4 text-white pt-20'>
        <div className="bg-gradient-to-br from-fuchsia-400 via-violet-600 to-violet-700 rounded-2xl p-5 px-10 py-10 flex flex-wrap justify-around items-center gap-5 lg:w-[900px]">
            <p className="text-[32px] font-[600]">
                Intrested Working With Me?
            </p>

            <a href="mailto:fauziahnsf@gmail.com">
            <button type="button" class="text-[#9A55E8] bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-white dark:hover:bg-purple-100 dark:focus:ring-purple-900">
                Contact Me
            </button></a>
        </div>
      
    </div>
  )
}
