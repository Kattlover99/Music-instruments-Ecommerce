/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file $instrumentUrl.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { useLoaderData, useLocation } from "@remix-run/react"
import { getInstrument } from "~/api/instruments.server"

export async function loader({ params })
{
    const { instrumentUrl } = params

    const instrument = await getInstrument(instrumentUrl)

    if (instrument.data.length === 0)
    {
        throw new Response('', {
            status: 404,
            statusText: 'Instrument not found'
        })
    }

    return instrument
}

export function meta({ data })
{
    if (!data)
    {
        return {
            title: 'Miusiq Remix - Instrument not found',
            description: `Instruments store - Instrument not found`
        }
    }
    return (
        {
            title: `Miusiq Remix - ${data.data[ 0 ].attributes.name}`,
            description: `Instruments store - ${data.data[ 0 ].attributes.name}`
        }
    )
}

function Instrument()
{
    const location = useLocation()
    const instrument = useLoaderData()

    const { name, description, image, price } = instrument.data[ 0 ].attributes

    return (
        <div className="instrument">
            <img
                src={image.data.attributes.url}
                alt={`${name} representation`}
                className={location.pathname === '/store' ? 'image' : ''}
                draggable="false" />

            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    )
}

export default Instrument