import React, {Component} from 'react'
import fire from '../config/fire';
import Todos from './Todos'
import AddTodo from './addTodo';

class Home extends Component {

    constructor(props) { 
        super(props);

        this.logout = this.logout.bind(this);

        this.state = {
            todos: [
                {
                    id: 1,
                    name: "stay home",
                    description: "COVID 19",
                    expire: "30 April",
                    completed: false 
                },
                {
                    id: 2,
                    name: "virgin",
                    description: "COVID 19",
                    expire: "30 April",
                    completed: false 
                },
                {
                    id: 3,
                    name: "car",
                    description: "COVID 19",
                    expire: "30 April",
                    completed: false 
                }
            ]
        }

        // this.searchTodo = this.searchTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.markAsComplete = this.markAsComplete.bind(this); 
    }

    // searchTodo(todoList) {
    //     console.log(todoList)
    //     if(todoList != null) {

    //         this.setState({
    //             todos : todoList
    //         })
    //     }else {
    //         this.setState({
    //             todos: this.todos
    //         })
    //     }
    // }
 
 
    deleteTodo(id) {
        let updatedTodos = this.state.todos;

        updatedTodos = updatedTodos.filter((todo) => todo.id !== id)
        
        this.setState({
            todos : updatedTodos
        })
    }

    markAsComplete(index, id) {
        
        let updatedTodos = this.state.todos;

        updatedTodos[index-1].completed = !updatedTodos[index-1].completed;

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

    logout(e) {
        e.preventDefault();
        fire.auth().signOut(); 
    }

    render() {

        return(
            <div>
                <h3 className="mt-5"> Huawei Todo App </h3>
                <hr/>

                <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} markAsComplete={this.markAsComplete} />
                <hr/>
                <AddTodo addNewTodo = {this.addNewTodo} />
                
                <button className="btn btn-dark m-5" onClick={this.logout}>Logout</button>
            </div>
        )
    }

}

export default Home;