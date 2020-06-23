import React from 'react'
import ReactDOM from 'react-dom'

import Option from './Option'

const Options = ( props ) => {
    const { options, handleDeleteOptions, handleDeleteOption } = props

    return (
        <div className="content-wrap options">
            <div className="option-header">
                <h3>Your Options</h3>
                <button onClick={ handleDeleteOptions }>Remove All</button>
            </div>
            { options.length === 0 && <p className="no-options">Please add an option to get started</p> }
            <ul>
                {
                    options.map( ( option, key ) => (
                        <Option
                            option={ option }
                            handleDeleteOption={ handleDeleteOption }
                            key={ key }
                            index={ key }
                        />
                    ) )
                }
            </ul>
        </div>
    )
}

export default Options
