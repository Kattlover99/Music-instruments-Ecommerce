/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file shopping-cart.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 9th February 2023
 */

import styles from "~/styles/shopping-cart.css"

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


export function meta()
{
    return {
        title: 'Miusiq Remix - Shopping Cart',
        description: 'Shopping cart, music'
    }

}

function ShoppingCart()
{
    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className="shopping-cart">
                    <h2>Articles</h2>
                </div>

                <aside className="resume">
                    <h3>Order resume</h3>
                    <p>Total value</p>
                </aside>
            </div>
        </main>
    )
}

export default ShoppingCart