import React from 'react';
import './Fandom.css'
import './MainPage.css'
import otaconlogo from '../../media/fandom/otaconlogo.png'
import touhou from '../../media/fandom/2hu.png'

// import { FandomData } from '../../data/fandom/FandomEvent'

export default function MainPage(){
    return(
        <>
            <div className='fandom-mainpage'>
            <div className='fandom-decor'>
            <img src={otaconlogo} alt='otaconlogo' width='384px' height='216px' className='fandom-mainpage-logo'></img>
            <img src={touhou} alt='2hu' width='628px' height='474px' className='fandom-mainpage-2hu'></img>
            </div>
                <div className='fandom-mainpage-text'>
                    <h3>THE LITERATURE SOCIETY IS THRILLED TO INVITE YOU TO OTACON, A WEEK-LONG CELEBRATION OF ALL THINGS ANIME! 
                    JOIN US FROM AUGUST 7TH TO AUGUST 12TH BY REGISTERING BELOW.</h3>
                </div>
            </div>
        </>
    )
};