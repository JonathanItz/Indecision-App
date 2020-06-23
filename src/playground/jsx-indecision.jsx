
const app = {
    title: 'Title',
    subject: 'Subject',
    options: []
}

const onFormSubmit = ( e ) => {
    e.preventDefault()

    const optionValue = e.target.elements.option.value

    // Don't run that shit if it's empty
    if( ! optionValue ) return

    app.options.push( ` ${ optionValue }` )
    e.target.elements.option.value = ''
    renderApp()
}

const removeAll = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randNumb = Math.floor( Math.random() * app.options.length )
    const options = app.options[ randNumb ]
    alert( options )
}

const appRoot = document.querySelector( '#app' )

const numbers = [ 1, 2, 3, 4 ]

const renderApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subject && <p>{ app.subject }</p> }
            { app.options && app.options.length ? <p>{ app.options }</p> : <p>No Options here</p> }
            <p>Number of options: { app.options.length }</p>
            <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What should I do?</button>
            <button onClick={ removeAll }>Remove All</button>

            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option" placeholder="type some shit"></input>
                <button>Submit that shit</button>
            </form>

            <ol>
                {
                    app.options.map( number => <li key={ number }>{ number }</li> )
                }
            </ol>

        </div>
    )
    ReactDOM.render( template, appRoot )
}

renderApp()
