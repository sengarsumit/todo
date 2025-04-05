"use client";
import { BackgroundLines } from "@/components/ui/background-lines";


function Login() {
  return (
   
      <BackgroundLines
      className="flex items-center justify-center min-h-screen  bg-white dark:bg-black"
      svgOptions={{ duration: 2 }}
    >
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md z-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 dark:bg-white text-white font-semibold rounded-md shadow-sm"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-700 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </BackgroundLines>

  )
}

export default Login;