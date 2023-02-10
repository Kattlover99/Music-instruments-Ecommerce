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

import { useOutletContext } from "@remix-run/react"
import { useEffect, useState } from "react"
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
    const [ total, setTotal ] = useState(0)
    const { cart, newQuantity, deleteInstrument } = useOutletContext()

    useEffect(() =>
    {
        const totalValue = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
        setTotal(totalValue)
    }, [ cart ])


    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className="shopping-cart">
                    <h2>Articles</h2>
                    {cart?.length === 0
                        ? 'Shopping Cart is empty'
                        : (
                            cart?.map(product => (
                                <div key={product.id} className='product'>
                                    <div>
                                        <img src={product.image} alt={`${product.name} product`} draggable='false' />
                                    </div>

                                    <div>
                                        <p className="name">{product.name}</p>
                                        <p>Quantity:

                                            <select value={product.quantity}
                                                className='select'
                                                onChange={e => newQuantity({
                                                    quantity: +e.target.value,
                                                    id: product.id
                                                })}>

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </p>

                                        <p className="price">$ <span>{product.price}</span></p>
                                        <p className="subtotal">Subtotal: $ <span>{product.quantity * product.price}</span></p>
                                    </div>
                                    <button type="button" className="button" onClick={() => deleteInstrument(product.id)}>X</button>
                                </div>
                            ))
                        )}
                </div>

                <aside className="resume">
                    <h3>Order resume</h3>
                    <p>Total value ${total}</p>
                </aside>
            </div>
        </main>
    )
}

export default ShoppingCart