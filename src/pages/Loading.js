import React from 'react'
import loadingImg from '../img/1.gif'

export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingImg} alt="loading" className="loading-icon"/>
        </div>
    )
}
