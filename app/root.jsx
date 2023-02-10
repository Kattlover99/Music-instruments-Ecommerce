/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file root.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 8th February 2023
 */

import { Link, Links, LiveReload, Meta, Outlet, Scripts, useCatch } from '@remix-run/react'
import { useEffect, useState } from "react"
import Footer from "~/components/footer"
import Header from "~/components/header"
import styles from '~/styles/index.css'
import Favicon from '../public/favicon.ico'

// Meta and links only works into routes

export function meta()
{
    return (
        {
            charset: 'utf-8',
            title: 'Miusiq Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}

export function links()
{
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'icon',
            href: Favicon,
            type: 'icon'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App()
{
    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shopping-cart')) ?? [] : null
    const [ cart, setCart ] = useState(cartLS)

    useEffect(() =>
    {
        localStorage.setItem('shopping-cart', JSON.stringify(cart))
    }, [ cart ])


    const addToCart = instrument =>
    {
        if (cart.some(instrumentState => instrumentState.id === instrument.id))
        {
            const newCart = cart.map(InstrumentState =>
            {
                if (InstrumentState.id === instrument.id)
                {
                    InstrumentState.quantity = instrument.quantity
                }
                return InstrumentState
            })

            setCart(newCart)
        } else
        {
            setCart([ ...cart, instrument ])
        }
    }

    const newQuantity = instrument =>
    {
        const newCart = cart.map(instrumentState =>
        {
            if (instrumentState.id === instrument.id)
            {
                instrumentState.quantity = instrument.quantity
            }
            return instrumentState
        })
        setCart(newCart)
    }

    const deleteInstrument = id =>
    {
        const newCart = cart.filter(instrumentState => instrumentState.id !== id)
        setCart(newCart)
    }

    return (
        <Document>
            <Outlet
                context={{
                    addToCart,
                    cart,
                    newQuantity,
                    deleteInstrument
                }} />
        </Document>
    )
}

function Document({ children })
{
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>)
}

/* Error management */

export function CatchBoundary()
{
    const error = useCatch()
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="link-error" to="/">Maybe you want to go back to the main page</Link>
        </Document>
    )
}

export function ErrorBoundary({ error })
{
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="link-error" to="/">Maybe you want to go back to the main page</Link>
        </Document>
    )
}