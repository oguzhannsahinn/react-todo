import React, {Component} from 'react'

class AddTodo extends Component {

    state = {
        name : "",
        description : "",
        expire : "",
        completed : false,
        showAddTodo : false
    }

    onNameChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onDescriptionChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onExpireChange(e) {        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAddSubmit(e) {        
        const {addNewTodo} = this.props;
        const {name, description, expire, completed} = this.state;

        const newTodo = {
            id: document.querySelectorAll(".todo-item").length + 1,
            name : name,
            description : description,
            expire : expire,
            completed : completed
        }

        addNewTodo(newTodo);
        e.preventDefault();
    }

    _showAddTodo() {        
        this.setState({
            showAddTodo : true
        })
    }

    _hideAddTodo() {
        this.setState({
            showAddTodo : false
        })
    }

    render() {

        const {name, description, expire, showAddTodo} = this.state;

        const addTodoPosition = {
            transitionDuration: ".75s",
            marginLeft: "50%",
            transform: "translateX(-50%)",
        }

        const showAddTodoButton = {
            fontSize: "20",
            fontWeight: "bold"
        }

        if(showAddTodo) {
            return(    
                <div className="card col-4 mt-5" style={addTodoPosition}>
                <h5 className="card-header">Add Todo</h5>
                <div className="card-body">
    
                   <form onSubmit={this.onAddSubmit.bind(this)}>
    
                       <div className="form-group">
                           <label htmlFor="name">Name</label>
                           <input 
                                type="text"
                                id="name"
                                className="form-control"
                                name="name"
                                required="require"
                                placeholder="name"
                                value={name}
                                onChange={this.onNameChange.bind(this)}
                           />
    
                           <label className="mt-3" htmlFor="description">Description</label>
                           <input 
                                type="text"
                                id="description"
                                className="form-control"
                                name="description"
                                placeholder="description"
                                value={description}
                                onChange={this.onDescriptionChange.bind(this)}
                           />
                            <label className="mt-3" htmlFor="expire">Expire</label>
                           <input 
                                type="date"
                                id="expire"
                                className="form-control"
                                name="expire"
                                placeholder="expire date"
                                value={expire}
                                onChange={this.onExpireChange.bind(this)}
                           />
                       </div>
    
                        <button type="submit" className="btn btn-primary m-1 col-6">Add</button>
                        <br/>
                   </form>
                        <button className="btn btn-light mt-3" onClick={this._hideAddTodo.bind(this)}>Hide</button>
    
                </div>
            </div>    
            )
        }else {
            return(
                <div>
                    <button style={showAddTodoButton} onClick={this._showAddTodo.bind(this)} className="btn btn-primary m-3">+</button>
                </div>
            )
        }
       
    }
}

export default AddTodo;