import React from 'react'
import ReactDOM from 'react-dom'

// Components
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props )
        this.handleDeleteOptions = this.handleDeleteOptions.bind( this )
        this.handlePick = this.handlePick.bind( this )
        this.handleAddOption = this.handleAddOption.bind( this )
        this.handleDeleteOption = this.handleDeleteOption.bind( this )
        this.closeModel = this.closeModel.bind( this )
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const options = localStorage.getItem( 'options' )
            if( options ) {
                this.setState( () => ( { options: JSON.parse( options )} ))
            }
        } catch( e ) {

        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if( prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify( this.state.options )
            localStorage.setItem( 'options', json )
        }
    }

    componentWillUnmount() {
        console.log('this did unmount');
    }

    handleDeleteOptions() {
        this.setState( () => ( { options: [] } ) )
    }

    handleDeleteOption( optionToRemove ) {
        this.setState( prevState => ( {
            options: prevState.options.filter( option => option != optionToRemove)
        } ))
    }

    handlePick() {
        const { options } = this.state,
            optionsLength = options.length,
            optionsIndex = Math.floor( Math.random() * optionsLength ),
            option = options[ optionsIndex ]

        this.setState( prevState => ( { selectedOption: option } ) )
    }

    handleAddOption( option ) {
        if( ! option ) {
            return 'Enter valid value to add item'
        } else if( this.state.options.indexOf( option ) >= 0 ) {
            return 'Value already exists'
        }

        this.setState( prevState => ( { options: prevState.options.concat( option ) } ) )
    }

    closeModel() {
        this.setState( prevState => ( { selectedOption: undefined } ) )
    }

    render() {

        const subTitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subTitle={ subTitle } />
                <Action
                    hasOptions={ this.state.options.length > 0 ? true : false }
                    handlePick={ this.handlePick }
                />
                <Options
                    handleDeleteOptions={ this.handleDeleteOptions }
                    options={ this.state.options }
                    handleDeleteOption={ this.handleDeleteOption }
                />
                <AddOption handleAddOption={ this.handleAddOption } />
                <OptionModal
                    selectedOption={ this.state.selectedOption }
                    closeModel={ this.closeModel }
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
