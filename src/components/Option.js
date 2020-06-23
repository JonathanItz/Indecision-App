import React from 'react'
import ReactDOM from 'react-dom'

const Option = props => {
    const { option, handleDeleteOption, index } = props

    return (
        <li className="option" key={ option }>
            <p>{ index + 1 }. { option }</p>
            <button
                onClick={ e => {
                    handleDeleteOption( option )
                }
            }>Remove</button>
        </li>
    )
}

export default Option
