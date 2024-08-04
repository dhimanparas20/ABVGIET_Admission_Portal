import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-white text-primary py-4 px-6 flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg" prefetch={false}>
          <img className="max-h-10 sm:max-h-20 " src="/Logo.png" alt="ABVGIET LOGO" />
          <span className="text-base sm:text-xl">ABVGIET Admission Cell</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="/#Programs" className="hover:underline" prefetch={false}>
            Programs
          </Link>
          <Link href="/#Contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/Register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Register
          </Link>
          {/* <Button variant="outline" className="md:hidden">
            <MenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button> */}
        </div>
      </header>
  )
}

export default Navbar