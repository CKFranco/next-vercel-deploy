import React from 'react'
import Head from 'next/head'
import { Navbar } from '../navbar/Navbar'
import styles from './MainLayout.module.css'

export const MainnLayout = ({children}:any) => {
    return (
    <div className={styles.container}>

        <Head>
        <title>Home Page Franco</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <main className={styles.main}>
    
        {children}

        </main>

    </div>
    )
}
