/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file store.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Outlet, useOutletContext } from "@remix-run/react"
import styles from "~/styles/instruments.css"

export function links()
{
    return (
        [
            {
                rel: 'stylesheet',
                href: styles
            }
        ]
    )
}

function Store()
{
    return (
        <main className="container">
            <Outlet
                context={useOutletContext()} />
        </main>
    )
}

export default Store