/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file course.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

export default function Course({ course })
{
    const { content, image, title } = course
    return (
        <section className="course" style={{ backgroundImage: `linear-gradient(90deg, var(--black), transparent), url(${image.data.attributes.url})` }}>

            <div className="container course-grid">
                <div className="content">
                    <h2 className="heading">{title}</h2>
                    <p className="text">{content}</p>
                </div>
            </div>
        </section>
    )
}
