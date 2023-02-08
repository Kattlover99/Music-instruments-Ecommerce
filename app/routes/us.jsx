/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file us.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import image from '../../public/img/us.jpg'
import styles from '../styles/us.css'

export function meta()
{
    return (
        {
            title: 'Miusiq Remix - About Us',
            description: 'A Music store with a lot of taste'
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
            },
            {
                rel: 'preload',
                href: image,
                as: 'image'
            }
        ]
    )
}

function Us()
{
    return (
        <main className="container us">
            <h2 className="heading">Us</h2>

            <div className="content">
                <img src={image} alt="About us" />

                <div>
                    <p>
                        Vivamus fringilla lectus et pulvinar commodo. Cras felis purus, lacinia et tincidunt quis, consequat vel nisi. Ut congue, enim eget fringilla mattis, nisl justo ultrices quam, vel porttitor enim lacus vel mauris. Vestibulum congue leo leo, venenatis convallis leo faucibus vel. Morbi lectus odio, porta vitae ex in, dapibus accumsan odio. Aliquam erat volutpat. Donec molestie tellus in pulvinar venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent venenatis felis libero, at placerat lacus finibus vehicula. Phasellus dui sem, tincidunt ac suscipit eget, dapibus eu tellus.
                    </p>

                </div>
            </div>
        </main>
    )
}

export default Us