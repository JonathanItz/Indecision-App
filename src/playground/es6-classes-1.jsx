
class Person {
    constructor( name = 'unknown', age = 0 ) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello! I'm ${ this.name }`
    }

    getDescription() {
        return `${ this.name } is ${ this.age } years old`
    }
}

class Student extends Person {

    constructor( name, age, major = undefined ) {
        super( name, age )
        this.major = major
    }

    myMajor() {
        return `I'm ${ this.name } and my major is ${ this.major }`
    }

    getDescription() {

        if( ! this.major ) return super.getDescription()

        return super.getDescription() + ` and their major is ${ this.major }`
    }
}

class Traveler extends Person {
    constructor( name, age, homeLocation ) {
        super( name, age )
        this.homeLocation = homeLocation
    }

    getGreeting() {
        if( ! this.homeLocation ) return super.getGreeting()

        return super.getGreeting() + ` and I'm from ${ this.homeLocation }`
    }
}

const me = new Traveler( 'Jonathan Itzen', 24, 'Fort Dodge' )

// const other = new Student( 'Lucas', 12 )
console.log(me.getGreeting());
