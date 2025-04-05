"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button} from "@/components/ui/button";

export default function Home() {
  const items = [
    {
      title: "Due Dates",
      description: "You can put a due date for your task.",
      link: "",
    },
    {
      title: "Completed",
      description: "Your task are saved in completed section.",
      link: "",
    },
    {
      title: "Due Date reminder",
      description: "You will be notified when your task is due.",
      link: "",
    },
    {
      title: "Create a Task",
      description: "You can create a task.",
      link: "",
    },
    {
      title: "Edit a Task",
      description: "You can edit a task.",
      link: "",
    },
    {
      title: "Delete a Task",
      description: "You can delete a task.",
      link: "",
    },
  ];
  
  return (
    <div className="bg-white dark:bg-black min-h-screen">
       <nav className="dark:bg-black text-white p-4 flex justify-between items-center max-w-[70%] mx-auto ">
      <div className="text-xl font-bold dark:text-white text-black">Todo</div>
      <div className="space-x-4">
      <a href="/login" className="text-white hover:text-gray-300">
      <Button variant="default">Login</Button>
      </a>
      <a href="/signup" className="text-white hover:text-gray-300">
      <Button variant="secondary">Sign Up</Button>
      </a>
      </div>
    </nav>
    <div className="flex  items-center justify-between  max-w-[70%] mx-auto mt-[10%] p-[2.5%] ">
      <div>
        <h1 className="text-9xl">Todo</h1>
        <br/>
        <p className="text-4xl italic ">A simple todo app</p>
      </div>
      <div>
        <h1 className="text-9xl">image</h1>
      </div>
    </div>
    <div className="mt-[10%] flex items-center justify-between  bg-gradient-to-r from-green-300 to-blue-300  max-w-[70%] mx-auto p-[3%] rounded-lg">
      <div><p>"Simple, straightforward,</p><p>and super powerful"</p></div>
      <div><p>"The best to-do list app</p><p> on the market"</p></div>
      <div><h1>"Nothing too complex"</h1></div>
    </div>
    <div className=" bg-white dark:bg-black   text-center  mt-10 ">
    <h1 className="text-6xl">Features</h1>
    <div className="max-w-[70%] mx-auto mt-[3%]">
    <HoverEffect items={items} />
    </div>
    <div>
      
    </div>
   
    </div>
    <footer className="relative mt-[15%]  bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <a href="/" className="hover:underline">Todo™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
   
  </div>
  );
}
