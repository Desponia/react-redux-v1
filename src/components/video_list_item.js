import React from 'react'

/*
const VideoListItem = (props) => {
    const video = props.video
    return <li>Video {video}</li>
}
*/

const VideoListItem = ({video, onVideoSelect}) => {
    // 위의 onVideoSelect ===  const onVideoSelect = props.onVideoSelect  와 동일, 위의 중괄호는 es6 방식
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem