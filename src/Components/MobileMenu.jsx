import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({ isOpen, onClose }) => {
  const [currentMenu, setCurrentMenu] = useState(null)

  const menuItems = [
    {
      id: 'vehicles',
      title: 'Vehicles',
      hasSubmenu: true,
      submenu: [
        {
          id: 'model-s',
          name: 'Model S',
          image: '/img/m1.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'model-3',
          name: 'Model 3',
          image: '/img/m2.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'model-y',
          name: 'Model Y',
          image: '/img/m3.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'model-x',
          name: 'Model X',
          image: '/img/m4.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'cybertruck',
          name: 'Cybertruck',
          image: '/img/m5.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'inventory',
          name: 'Inventory',
          image: '/img/m6.png',
          links: [
            { text: 'New', href: '/order' },
            { text: 'Pre-Owned', href: '/order' }
          ]
        }
      ]
    },
    {
      id: 'energy',
      title: 'Energy',
      hasSubmenu: true,
      submenu: [
        {
          id: 'solar-panels',
          name: 'Solar Panels',
          image: '/img/e1.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'solar-roof',
          name: 'Solar Roof',
          image: '/img/e2.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'powerwall',
          name: 'Powerwall',
          image: '/img/e3.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'megapack',
          name: 'Megapack',
          image: '/img/e4.png',
          links: [
            { text: 'Learn', href: '/learn' }
          ]
        }
      ]
    },
    {
      id: 'charging',
      title: 'Charging',
      hasSubmenu: true,
      submenu: [
        {
          id: 'wall-connector',
          name: 'Wall Connector',
          image: '/img/c1.jpeg',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'mobile-connector',
          name: 'Mobile Connector',
          image: '/img/c2.jpeg',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Order', href: '/order' }
          ]
        },
        {
          id: 'supercharger',
          name: 'Supercharger',
          image: '/img/c3.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Find Us', href: '/support' }
          ]
        },
        {
          id: 'destination-charging',
          name: 'Destination Charging',
          image: '/img/c4.png',
          links: [
            { text: 'Learn', href: '/learn' },
            { text: 'Find Us', href: '/support' }
          ]
        }
      ]
    },
    {
      id: 'discover',
      title: 'Discover',
      hasSubmenu: false
    },
    {
      id: 'shop',
      title: 'Shop',
      hasSubmenu: false
    },
    {
      id: 'support',
      title: 'Support',
      hasSubmenu: false
    },
    {
      id: 'location',
      title: 'United States',
      subtitle: 'English',
      icon: 'globe',
      hasSubmenu: true
    },
    {
      id: 'account',
      title: 'Account',
      icon: 'user',
      hasSubmenu: false
    }
  ]

  const handleBack = () => {
    setCurrentMenu(null)
  }

  const handleMenuClick = (menuItem) => {
    if (menuItem.hasSubmenu) {
      setCurrentMenu(menuItem)
    }
  }

  const renderMainMenu = () => (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="w-6"></div>
        <div className="flex-1"></div>
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <div className="flex items-center">
              {item.icon === 'globe' && (
                <svg className="w-5 h-5 text-gray-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              )}
              {item.icon === 'user' && (
                <svg className="w-5 h-5 text-gray-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              <div>
                <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                {item.subtitle && (
                  <div className="text-sm text-gray-500">{item.subtitle}</div>
                )}
              </div>
            </div>
            {item.hasSubmenu && (
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )

  const renderSubmenu = () => {
    const menuItem = currentMenu
    if (!menuItem || !menuItem.submenu) return null

    return (
      <div className="w-full h-full bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <button
            onClick={handleBack}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-lg font-semibold text-gray-900">{menuItem.title}</div>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Submenu Items */}
        <div className="px-6 py-2">
          {menuItem.submenu.map((item) => (
            <div key={item.id} className="flex items-center py-4">
              <div className="w-16 h-12 mr-4 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-gray-900 mb-1">{item.name}</div>
                <div className="flex space-x-4">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="text-sm text-gray-600 underline hover:text-gray-800"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <div className="w-full h-full overflow-hidden">
        <div className={`transition-transform duration-300 ease-in-out ${currentMenu ? '-translate-x-full' : 'translate-x-0'}`}>
          {renderMainMenu()}
        </div>
        <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${currentMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          {renderSubmenu()}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

