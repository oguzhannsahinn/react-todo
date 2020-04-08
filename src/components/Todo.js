import React, {Component} from 'react';

class Todo extends Component {

    onDeleteClick(id, e) {
        const {deleteTodo} = this.props;

        deleteTodo(id);
    }

    onCompleteClick(index, e) {
        const {markAsComplete} = this.props;

        markAsComplete(index);
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
                    <button className={"btn mr-2 " + (completed ? "btn-dark" : "btn-success")} onClick={this.onCompleteClick.bind(this, index)} style={{fontWeight:"bold"}}>🗸</button>
                    <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, id)} > Delete </button>
                </td>
            </tr>
        )
    }
}

export default Todo;