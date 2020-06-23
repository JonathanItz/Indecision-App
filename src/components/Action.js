import React from 'react'
import ReactDOM from 'react-dom'

const Action = ( props ) => {
    const { hasOptions, handlePick } = props
    return (
        <div className="content-wrap">
            <button className="big-button" disabled={ ! hasOptions } onClick={ handlePick }>What Should I Do?</button>
        </div>
    )
}

export default Action
