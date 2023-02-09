/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file navigation.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Link, useLocation } from "@remix-run/react"

function Navigation()
{
  const location = useLocation()
  return (
    <nav className="navigation">
      <Link
        to='/'
        className={location.pathname === '/' ? 'active' : ''}>
        Home
      </Link>

      <Link
        to='/us'
        className={location.pathname === '/us' ? 'active' : ''}>
        Us
      </Link>

      <Link to='/blog'
        className={location.pathname === '/blog' ? 'active' : ''}>
        Blog
      </Link>

      <Link to='/instruments'
        className={location.pathname === '/instruments' ? 'active' : ''}>
        Store
      </Link>
    </nav>
  )
}

export default Navigation