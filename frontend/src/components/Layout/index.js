import React from 'react'
import Header from '../header'
import MenuHeader from '../../containers/MenuHeader'

function Layout(props) {
    return (
        <>
            <Header />
            <MenuHeader />
            {props.children}
        </>
    )
}

export default Layout
