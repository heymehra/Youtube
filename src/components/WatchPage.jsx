import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParam] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='flex flex-col'>
                <div className='px-5 mt-24 flex'>
                    <div>
                    <iframe
                        width="1125"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat/>
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage