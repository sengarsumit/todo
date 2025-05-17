"use client";

import Sidebar from "@/components/ui/sidebar";

function page() {
  return (
   <>
   <div className="flex min-h-screen bg-gray-50">
  <Sidebar />

  <main className=" flex flex-col p-4 mt-[10vh] md:ml-64 transition-all duration-300">
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Today</h1>
      <span className="text-gray-500">4 tasks</span>
    </div>
    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Overdue</h2>
      <ul className="space-y-3">
        <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500" />
            <span className="text-gray-800">
              Download Todoist on all your devices and email for 
              💻⌚🖥️📱🗓️
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-blue-500">28 Mar</span>
          </div>
        </li>
        <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500" />
            <span>
              Take the productivity method quiz
              <span className="ml-2 text-gray-400 text-xs">Get a personalized recommendation from Todoist</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-blue-500">29 Mar</span>
          </div>
        </li>
        <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500" />
            <span>
              Do a weekly review of my tasks and goals
              <span className="ml-2 text-gray-400 text-xs">Home 🏡 / Routines</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-blue-500">30 Mar</span>
          </div>
        </li>
        <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500" />
            <span>
              Browse the Todoist Inspiration Hub
              <span className="ml-2 text-gray-400 text-xs">For productivity advice and to sign up for our newsletter</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-blue-500">30 Mar</span>
          </div>
        </li>
      </ul>
    </section>
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">17 May · Today · Saturday</h2>
      <button className="flex items-center text-blue-600 hover:underline">
        <span className="text-2xl mr-2">+</span> Add task
      </button>
    </section>
  </main>
</div>
   </>

   

  )
}

export default page