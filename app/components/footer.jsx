/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file footer.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import Navigation from "./navigation"

function Footer()
{
    return (
        <footer className="footer">
            <div className="container content">

                <Navigation />
                <p className="copyright">All rights reserved {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer