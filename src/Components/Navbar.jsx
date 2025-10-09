import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* Compact single-row navbar over hero */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex items-center justify-between h-12 px-4">
          <img src="/img/tesla-logo.png" alt="Tesla" className="h-4 w-auto" style={{ filter: 'invert(1)' }} />
          <button className="bg-white/30 text-white px-3 py-1 rounded-md backdrop-blur-sm">Menu</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar