import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
    
    constructor(props) {
        super(props);
     
        this.state={
            search:"",
            todoList: []
        };
    }

    handleInputChange(event){
       this.setState({
           search : event.target.value
       })
    };
 

    onCompleteClick(id, e) {
        const {markAsComplete} = this.props;

        markAsComplete(id);
    }

    render() {

        const tablePosition = {
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: '3%'
        } 
        
        const searchInputStyle = {
            padding: "7px",
            marginRight: "5px",
            border:"none",
            width: "200px",
            borderBottom: "1px solid #aaa",
            outline: "none"
        }

        const {deleteTodo, markAsComplete} = this.props;
        const {search} = this.state;

        let filteredTodos = this.props.todos.filter( (todo) => {
            return todo.name.indexOf(this.state.search) !== -1;
        } );

        return(

            <div> 
                <input type="text" placeholder="Enter item to be searched" value={search} style={searchInputStyle} onChange={this.handleInputChange.bind(this)} />

                <table className="table table-striped col-8" style={tablePosition}>
                    <thead>
                        <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Expire Date</th>
                        <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            filteredTodos.map((todo,i)=>{ 

                                const { id, name, description, expire, completed} = todo;

                                return <Todo
                                    markAsComplete = {markAsComplete}
                                    deleteTodo = {deleteTodo}
                                    key = {id}
                                    id = {id}
                                    index = {i+1}
                                    name = {name}
                                    description = {description}
                                    expire = {expire}
                                    completed = {completed}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todos