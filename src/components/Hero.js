import React from 'react'

export default function Hero({children}) {
    return (
        <header className="hero">
            <h1 className="hero-title">iran trip planer</h1>
            <img src="" alt="" className="logo"/>
            {children}
        </header>
    )
}
