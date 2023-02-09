/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file $blogUrl.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/api/blog.server"
import { formatDate } from "~/utils/helpers"

export async function loader({ params })
{
    const { blogUrl } = params

    const post = await getPost(blogUrl)

    if (post.data.length === 0)
    {
        throw new Response('', {
            status: 404,
            statusText: 'Post not found'
        })
    }

    return post
}

export function meta({ data })
{
    if (!data)
    {
        return {
            title: 'Miusiq Remix - Post not found',
            description: `Posts store - Post not found`
        }
    }
    return (
        {
            title: `Miusiq Remix - ${data.data[ 0 ].attributes.title}`,
            description: `Instruments store - ${data.data[ 0 ].attributes.title}`
        }
    )
}

function Blog()
{
    const blog = useLoaderData()

    const { content, image, title, publishedAt } = blog.data[ 0 ].attributes


    return (
        <article className="post mt-3">
            <img src={image.data.attributes.formats.small.url} alt={`${title}`} draggable="false" className="img" />
            <div className="content">
                <h3 >{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}

export default Blog