import React from 'react'

import ItemsList from './ItemsList'

import './index.css'

const App = () => (
  <main className="font-mono bg-gray-900 h-screen py-6">
    <div className="container mx-auto">
      <h3 className="text-white text-2xl font-medium">Hey, this is the Content application!</h3>
    </div>
    <div className="container mx-auto py-6">
      <ItemsList />
    </div>
  </main>
)

export default App
