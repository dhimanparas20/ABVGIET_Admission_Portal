import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white text-primary py-4 px-6 flex items-center justify-between shadow-md">
        <p>&copy; 2069 ABVGIET Admission Cell. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
  )
}

export default Footer