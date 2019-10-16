import React from 'react'

export default function ImageComp(props) {
    return (
        <div className="image-component">
            <img src={props.desc} alt="" />
        </div>
    )
}
