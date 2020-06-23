import React from 'react'
import ReactDOM from 'react-dom'

export default class AddOption extends React.Component {
    constructor( props ) {
        super( props )
        this.addNewOption = this.addNewOption.bind( this )

        this.state = {
            error: undefined
        }
    }

    addNewOption( e ) {
        e.preventDefault()

        const { handleAddOption } = this.props,
            option = e.target.elements.option.value.trim(),
            error = handleAddOption( option )

        this.setState( () => ( { error } ) )

        e.target.elements.option.value = ''
    }

    render() {
        return (
            <div className="content-wrap add-option">
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.addNewOption }>
                    <input type="text" name="option" placeholder="Type some shiiit"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// export default AddOption
