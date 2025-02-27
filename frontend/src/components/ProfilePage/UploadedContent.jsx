import React, { useEffect, useState } from 'react'
import ItemCard from '../ReaderSection/ItemCard'
import ItemMain from '../ReaderSection/ItemMain'
import { RxCross2 } from 'react-icons/rx'

export default function UploadedContent(props) {

    let uploadedContent = props.uploadedContent

    let [showItem, setShowItem] = useState(false)
    let [details, setDetails] = useState('')

    return (
        <div className='uploaded-content-display-modal'>
            <div className='profile-uploaded-content-display'>
                <div className='profile-uploaded-content-display-upperbar'>
                    <div>
                        {`Reader Section Content Upload Section (${uploadedContent.length})`}
                    </div>
                    <div className='profile-uploaded-content-display-x-button' onClick={()=>props.setShowUploadedContent(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='profile-uploaded-content-content-display-section'>
                    {
                    uploadedContent.length ? (
                        uploadedContent.map((item) =>(
                            <div onClick={() => {setShowItem(true)
                                setDetails(item)}}>
                                <ItemCard title={item.title} content={item.content} author={item.member_name} img={item.background} isAdmin={false} category={item.category} clickEnable={false}/>
                            </div>
                            ))
                        ):
                        <div className='reader-sec-contents no-content-message'>
                            No content uploaded yet
                        </div>
                    }
                </div>
                <div className='uploaded-content-display-lower-border'></div>
            </div>
            <ItemMain showItem={showItem} setShowItem={setShowItem} title={details.title} content={details.content} author='dgf' img={ 'https://litiitjb.litsoc.live/media/' + details.background} isAdmin={false} category={details.category}/>
        </div>
    )
}
