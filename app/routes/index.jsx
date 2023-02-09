/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file index.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { useLoaderData } from "@remix-run/react"
import { getBlogs } from "~/api/blog.server"
import { getInstruments } from "~/api/instruments.server"
import InstrumentList from "~/components/instrument-list"
import PostsList from "~/components/posts-list"
import stylesBlog from "~/styles/blog.css"
import stylesInstruments from "~/styles/instruments.css"

export async function loader()
{
    const [ instruments, blog ] = await Promise.all([
        getInstruments(),
        getBlogs()
    ])

    return { instruments: instruments.data, blog: blog.data }
}

export function meta()
{
    return {}

}

export function links()
{
    return (
        [
            {
                rel: 'stylesheet',
                href: stylesInstruments
            },
            {
                rel: 'stylesheet',
                href: stylesBlog
            },
        ]
    )
}

function Index()
{
    const { instruments, blog } = useLoaderData()
    return (
        <>
            <main className="container">
                <InstrumentList
                    instruments={instruments} />
            </main>

            <section className="container">
                <PostsList
                    blog={blog} />
            </section>
        </>
    )
}

export default Index