/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file instrument-list.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import Instrument from "./instrument";


export default function InstrumentList({ instruments })
{
    return (
        <>
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
        </>
    )
}
