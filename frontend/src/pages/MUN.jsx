import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Events/Events.css'
import GeneralTop from '../components/GeneralTop'

export default function MUN() {
    let item = GeneralTopData.MUN
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='mun-main' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0)), url(${imgsrc})`}}>
                <GeneralTop item={item} />
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}
