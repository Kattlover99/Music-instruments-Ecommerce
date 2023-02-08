/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file header.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */
import { Link } from "@remix-run/react"
import Logo from '../../public/img/logo-color-no-bg.png'
import Navigation from "./navigation"

function Header()
{
    return (
        <header className="header">
            <div className="container bar">
                <Link to='/'>
                    <img src={Logo} alt="Miusiq logo" className="logo" draggable='false' />
                </Link>

                <Navigation />

            </div>
        </header>
    )
}

export default Header