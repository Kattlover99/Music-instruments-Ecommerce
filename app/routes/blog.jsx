/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file blog.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Outlet } from "@remix-run/react"
import { getBlogs } from "~/api/blog.server"
import styles from "../styles/blog.css"

export async function loader()
{
    const blog = await getBlogs()

    return blog.data
}

export function meta()
{
    return (
        {
            title: 'Miusiq Remix - Blog',
        }
    )
}

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

function Blog()
{

    return (
        <main className="container">
            <Outlet />
        </main>
    )
}

export default Blog