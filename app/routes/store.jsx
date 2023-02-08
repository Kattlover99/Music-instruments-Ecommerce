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

import { useLoaderData } from "@remix-run/react"
import { getInstruments } from "~/api/instruments.server"
import Instrument from "~/components/instrument"

export async function loader()
{
    const instruments = await getInstruments()

    return instruments.data
}

export function meta()
{
    return (
        {
            title: 'Miusiq Remix - Store',
        }
    )
}

function Store()
{
    const instruments = useLoaderData()

    return (
        <main className="container">
            <h2 className="heading">Our products</h2>

            {instruments?.length && (
                <div className="instruments-grid">
                    {instruments.map(instrument => (
                        <Instrument
                            key={instrument?.id}
                            instrument={instrument?.attributes}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Store