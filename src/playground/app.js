class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props )
        this.handleDeleteOptions = this.handleDeleteOptions.bind( this )
        this.handlePick = this.handlePick.bind( this )
        this.handleAddOption = this.handleAddOption.bind( this )
        this.handleDeleteOption = this.handleDeleteOption.bind( this )
        this.state = {
            options: props.options
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
            optionsIndex = Math.floor( Math.random() * optionsLength )

        console.log(options[ optionsIndex ]);
    }

    handleAddOption( option ) {
        if( ! option ) {
            return 'Enter valid value to add item'
        } else if( this.state.options.indexOf( option ) >= 0 ) {
            return 'Value already exists'
        }

        this.setState( prevState => ( { options: prevState.options.concat( option ) } ) )
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
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = props => {
    const { title, subTitle } = props
    return (
        <div>
            <h1>{ title }</h1>
            { subTitle && <h2>{ subTitle }</h2> }
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = ( props ) => {
    const { hasOptions, handlePick } = props
    return (
        <div>
            <button disabled={ ! hasOptions } onClick={ handlePick }>what should i do</button>
        </div>
    )
}

const Options = ( props ) => {
    const { options, handleDeleteOptions, handleDeleteOption } = props

    return (
        <div>
            <button onClick={ handleDeleteOptions }>Remove All Options</button>
            { options.length === 0 && <p>Please add an option to get started</p> }
            <ul>
                {
                    options.map( option => (
                        <Option
                            option={ option }
                            handleDeleteOption={ handleDeleteOption }
                        />
                    ) )
                }
            </ul>
        </div>
    )
}

const Option = props => {
    const { option, handleDeleteOption } = props

    return (
        <li key={ option }>
            { option }
            <button
                onClick={ e => {
                    handleDeleteOption( option )
                }
            }>Remove</button>
        </li>
    )
}

class AddOption extends React.Component {

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
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.addNewOption }>
                    <input type="text" name="option" placeholder="Type some shiiit"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render( <IndecisionApp />, document.querySelector( '#app' ) )
