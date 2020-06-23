class Counter extends React.Component {

    constructor( props ) {
        super( props )
        this.handleAddOne    = this.handleAddOne.bind( this )
        this.handleRemoveOne = this.handleRemoveOne.bind( this )
        this.handleResetAll  = this.handleResetAll.bind( this )
        this.state = {
            count: props.count
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if( prevState.count !== this.state.count ) {
            localStorage.setItem( 'count', this.state.count )
        }
    }

    componentDidMount() {
        let count = localStorage.getItem( 'count' )

        if( ! isNaN( count ) ) {
            count = parseInt( count )
            this.setState( () => ( { count } ))
        }
    }

    handleAddOne() {
        this.setState( prevState => {
            return {
                count: this.state.count + 1
            }
        })
        console.log(this.state);
    }

    handleRemoveOne() {
        this.setState( prevState => {
            return { count: this.state.count - 1 }
        })
    }

    handleResetAll() {
        this.setState( prevState => {
            return { count: 0 }
        })
    }

    render() {
        return(
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleRemoveOne }>-1</button>
                <button onClick={ this.handleResetAll }>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render( <Counter />, document.querySelector( '#app' ) )
