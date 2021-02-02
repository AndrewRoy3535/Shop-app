import React from 'react'

import './Menuitem.scss'

function Menuitem({title, imageUrl, size}) {
    return (
        <div className={`${size} menu-item`} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>shop now</span>
            </div>
        </div>
    )
}

export default Menuitem
