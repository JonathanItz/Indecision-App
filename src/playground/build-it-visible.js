class VisibilityToggle extends React.Component {

    constructor( props ) {
        super( props )
        this.handleToggleVisibility = this.handleToggleVisibility.bind( this )
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState( prevState => {
            return { visibility: ! prevState.visibility }
        })
    }

    render() {
        const show = this.state.visibility
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={ this.handleToggleVisibility }>{ show ? 'Hide shit' : 'Show shit' }</button>
                { show && <p>This is some text</p> }
            </div>
        )
    }
}

ReactDOM.render( <VisibilityToggle />, document.querySelector( '#app' ) )
