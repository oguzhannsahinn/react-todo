import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
    
    render() {

        const {todos, deleteTodo, markAsComplete} = this.props;

        const tablePosition = {
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: '3%'
        } 

        return(
            <table className="table table-striped col-8" style={tablePosition}>
                <thead>
                    <tr>
                    <th scope="col">Order</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Expire Date</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, i) => {
                            const { id, name, description, expire, status} = todo;

                            return <Todo
                                markAsComplete = {markAsComplete}
                                deleteTodo = {deleteTodo}
                                key = {id}
                                id = {id}
                                index = {i+1}
                                name = {name}
                                description = {description}
                                expire = {expire}
                                status = {status}
                            />
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Todos