/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file blog.server.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

export async function getBlogs()
{
    const response = await fetch(`${process.env.API_URL}/blogs?populate=image`)
    const result = await response.json()

    return result
}

export async function getPost(url)
{
    const response = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`)
    const result = await response.json()

    return result
}
