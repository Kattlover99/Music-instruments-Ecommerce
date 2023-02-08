/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file instrument.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Link } from "@remix-run/react"

function Instrument({ instrument })
{
    const { description, image, price, url, name } = instrument

    return (
        <div className="instrument">
            <img src={image.data.attributes.formats.medium.url} alt={`${name} instrument`} draggable="false" className="image" />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
                <Link className="link" to={`/instruments/${url}`}>See product</Link>
            </div>
        </div>
    )
}

export default Instrument