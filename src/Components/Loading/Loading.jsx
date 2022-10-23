import React from 'react'
import "./loading.css"
const Loading = (props) => {
    return (
        <div >
            <div class="dots-l">
                <span className='span-css-load'></span>
                <span className='span-css-load'></span>
                <span className='span-css-load'></span>
                {props.a&&<p className='ml-5'><strong>&nbsp;&nbsp;&nbsp;Loading Problems</strong></p>}
            </div>
        </div>
    )
}

export default Loading