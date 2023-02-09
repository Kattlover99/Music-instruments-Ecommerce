/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file post.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post({ post })
{
    const { content, image, title, url, publishedAt } = post
    return (
        <article className="post">
            <img src={image.data.attributes.url} alt={`${title}`} className="image" draggable="false" />
            <div className="content">
                <h3 >{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="resume">{content}</p>
                <Link className="link" to={`/blogs/${url}`} >Read post</Link>
            </div>
        </article>
    )
}
