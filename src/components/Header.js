import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
    const { title, subTitle } = props
    return (
        <header>
            <div className="content-wrap">
                <h1>{ title }</h1>
                { subTitle && <h2>{ subTitle }</h2> }
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header
