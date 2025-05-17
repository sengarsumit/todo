import React from 'react'
 import Sidebar from '@/components/ui/sidebar'

function completed() {
  return (
    
     <>
   <div className="flex min-h-screen bg-gray-50">
  <Sidebar />

  <main className=" flex flex-col p-4 mt-[10vh] md:ml-64 transition-all duration-300">
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Completed Tasks</h1>
    </div>
    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">All Tasks</h2>
      <ul className="space-y-3">
        <li className="flex items-center justify-between p-3 bg-white rounded-lg ">
          <div className="flex items-center space-x-2">
            <span className="text-gray-800">
              Completed task:task title:Date
            </span>
          </div>
        </li>
        
      </ul>
    </section>
    
  </main>
</div>
   </>
    
  )
}

export default completed;