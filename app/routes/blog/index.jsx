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
import PostsList from "~/components/posts-list"

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

function Blog()
{
    const blog = useLoaderData()

    return (
        <PostsList
            blog={blog} />
    )
}

export default Blog