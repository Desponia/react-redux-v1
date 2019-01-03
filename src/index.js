import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAZTO-s1IBQLTjAWqvBAb-iiGGK1mW4u1U'

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))
