import React, {Component} from 'react'
import fire from '../config/fire';
import Todos from './Todos'
import AddTodo from './addTodo';

class Home extends Component {

    constructor(props) { 
        super(props);

        this.logout = this.logout.bind(this);

        this.state = {
            inputValue : "",
            todos: [
                {
                    id: 1,
                    name: "ahmet",
                    description: "COVID 19",
                    expire: "30 April",
                    status: false ? "completed" : "uncompleted"
                },
                {
                    id: 2,
                    name: "home",
                    description: "COVID 19",
                    expire: "30 April",
                    status: false ? "completed" : "uncompleted"
                },
                {
                    id: 3,
                    name: "stay home",
                    description: "COVID 19",
                    expire: "30 April",
                    status: false ? "completed" : "uncompleted"
                }
            ]
        }

        this.deleteTodo = this.deleteTodo.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.markAsComplete = this.markAsComplete.bind(this);
        this.searchByName = this.searchByName.bind(this);
    }

    deleteTodo(id) {
        let updatedTodos = this.state.todos;

        updatedTodos = updatedTodos.filter((todo) => todo.id !== id)
        
        this.setState({
            todos : updatedTodos
        })
    }

    markAsComplete(index, id) {
        
        let updatedTodos = this.state.todos;

        updatedTodos[index-1].status = "completed";

        this.setState({
            todos : updatedTodos
        })
    }

    addNewTodo(newTodo) {
        let updatedTodos = this.state.todos;

        updatedTodos.push(newTodo);

        this.setState({
            todos : updatedTodos
        })
    }

    searchByName() {
        let updatedTodos = this.state.todos;

        if(this.state.inputValue === "") {
            updatedTodos = this.state.todos;
        }else {
           updatedTodos = updatedTodos.filter( (todo) => todo.name === this.state.inputValue)
        }
        
        this.setState({
            todos: updatedTodos
        })
    }


    logout(e) {
        e.preventDefault();
        fire.auth().signOut(); 
    }

    render() {

        const searchInputStyle = {
            padding: "7px",
            marginRight: "5px",
            border:"none",
            borderBottom: "1px solid #aaa",
            outline: "none"
        }

        return(
            <div>
                <h3 className="mt-5"> Huawei Todo App </h3>
                <hr/>
                <input 
                    type="text"
                    name="search"
                    placeholder=" Search name"
                    id="search"
                    style={searchInputStyle}
                    value={this.state.inputValue}
                    onChange={text => this.setState({
                        inputValue: text.target.value
                    })}
                />
                <button className="btn btn-primary" onClick={this.searchByName}>Search</button>
                <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} markAsComplete={this.markAsComplete} />
                <hr/>
                <AddTodo addNewTodo = {this.addNewTodo} />
                
                <button className="btn btn-dark m-5" onClick={this.logout}>Logout</button>
            </div>
        )
    }

}

export default Home;