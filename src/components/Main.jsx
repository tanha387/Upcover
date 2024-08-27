import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

export const Main = () => {
    return (
        <div>

            <Header />
            <Outlet /></div>
    )
}
