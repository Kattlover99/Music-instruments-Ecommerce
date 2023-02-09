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
import InstrumentList from "~/components/instrument-list"
import styles from "~/styles/instruments.css"

export function meta()
{
    return (
        {
            title: 'Miusiq Remix - Store',
            description: 'Our Miusiq Store',

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

export async function loader()
{
    const instruments = await getInstruments()

    return instruments.data
}

function Store()
{
    const instruments = useLoaderData()

    return (
        <main className="container">
            <InstrumentList
                instruments={instruments} />
        </main>
    )
}

export default Store