import React, {Component} from 'react';

class Todo extends Component {

    onDeleteClick(id, e) {
        const {deleteTodo} = this.props;

        deleteTodo(id);
    }

    onCompleteClick(id, e) {
        const {markAsComplete} = this.props;

        markAsComplete(id);
    }

    render() {

        const {index, id, name, description, expire, completed} = this.props;

        return(
            <tr className="todo-item">
                <td>{index}</td>
                <td className={completed ? "done" : ""}>{name}</td>
                <td>{description}</td>
                <td>{expire}</td>
                <td>{completed ? "completed" : "uncompleted"}</td>
                <td>
                    <button className="btn btn-success mr-2" onClick={this.onCompleteClick.bind(this, id)} style={{fontWeight:"bold"}}>🗸</button>
                    <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, id)} > Delete </button>
                </td>
            </tr>
        )
    }
}

export default Todo;