import React from 'react'

export default () => (
  <div className="bg-purple-600 px-6 py-4 w-full shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-gray-200 text-white mr-6 text-xl flex items-center">ZED Run</div>
      <nav>
        <ul className="text-white flex justify-between">
          <li>
            <a className="text-white mr-6" href="#">
              RACING
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              BREEDING
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              MARKETPLACE
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              LEARN
            </a>
          </li>
        </ul>
      </nav>
      <button className="text-white px-6 py-2 rounded-md bg-purple-800 shadow-md">Login</button>
    </div>
  </div>
)
