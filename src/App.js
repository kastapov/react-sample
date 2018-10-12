import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {
                name: "Max",
                age: 29
            },
            {
                name: "Manu",
                age: 100
            },
            {
                name: "Kostya",
                age: 30
            }
        ],
        otherState: "blah blah"
    };

    swithNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 29
                },
                {
                    name: "Manu",
                    age: 100
                },
                {
                    name: "Kostya",
                    age: 0
                }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: "Max",
                    age: 29
                },
                {
                    name: event.target.value,
                    age: 100
                },
                {
                    name: "Kostya",
                    age: 0
                }
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I am application</h1>
                <button
                    style={style}
                    onClick={() => this.swithNameHandler('Closure Name')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.swithNameHandler.bind(this, 'Hahaha')}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}>
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
