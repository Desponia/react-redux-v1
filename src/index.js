import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAZTO-s1IBQLTjAWqvBAb-iiGGK1mW4u1U'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: API_KEY, term: 'Martin Garrix Game Over'}, (videos) => {
            // es6 key와 value 이름이 같은 경우에만 아래처럼 쓸 수 있음.
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            // this.setState({videos: data})
            // console.log(this.state.videos)
        })
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => {
                        console.log(selectedVideo)
                        this.setState({selectedVideo})
                    }}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
